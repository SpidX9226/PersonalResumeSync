using Npgsql;
using System.Data.Common;

namespace backend.Routes;

public static class MainRoutes
{
    public static void MapRoutes(this IEndpointRouteBuilder app)
    {
        var versionedGroup = app.MapGroup("/api/v1");

        versionedGroup.MapGet("/getCount", async (NpgsqlDataSource db) =>
        {
            await using var cmd = db.CreateCommand();
            cmd.CommandText = "SELECT COUNT(user_id) FROM unique_visits;";
            var result = await cmd.ExecuteScalarAsync();
            
            if (result is long resCount)
            {
                return Results.Ok(new { count = resCount });
            }

            return Results.InternalServerError(new { error = "unable to parse count of the unique visitors" });
        });
    }
}