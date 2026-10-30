using Npgsql;

namespace backend.Middleware;

public class UniqueVisitsMiddleware(RequestDelegate next)
{
    private readonly RequestDelegate _next = next;

    public async Task InvokeAsync(HttpContext context, NpgsqlDataSource db)
    {
        var requestId = context.TraceIdentifier;
        var cookie = context.Request.Cookies["user-id"];

        if (Guid.TryParse(cookie, out var userId))
        {
            await using var update = db.CreateCommand(
                "UPDATE unique_visits SET last_visit = $1 WHERE user_id = $2"
            );

            update.Parameters.AddWithValue(DateTime.UtcNow);
            update.Parameters.AddWithValue(userId);

            int affected = await update.ExecuteNonQueryAsync();

            if (affected > 0)
            {
                await _next(context);
                return;
            }
        }

        await CreateVisitor(context, db);
        await _next(context);
    }

    private static async Task CreateVisitor(HttpContext context, NpgsqlDataSource db)
    {
        var userId = Guid.CreateVersion7();
        var now = DateTime.UtcNow;

        await using var cmd = db.CreateCommand("INSERT INTO unique_visits(user_id, first_visit, last_visit) VALUES($1, $2, $3)");

        cmd.Parameters.AddWithValue(userId);
        cmd.Parameters.AddWithValue(now);
        cmd.Parameters.AddWithValue(now);

        await cmd.ExecuteNonQueryAsync();

        context.Response.Cookies.Append("user-id", userId.ToString(), new CookieOptions
        {
            HttpOnly = true,
            // for production set true
            Secure = false,
            SameSite = SameSiteMode.Lax,
            MaxAge = TimeSpan.FromDays(365)
        });
    }
}

public static class UniqueVisitsMiddlewareExtensions
{
    public static IApplicationBuilder UseUniqueVisits(this IApplicationBuilder builder)
    {
        return builder.UseWhen(
            context => context.Request.Path.StartsWithSegments("/api/v1"),
            branch => branch.UseMiddleware<UniqueVisitsMiddleware>()
        );
    }
}