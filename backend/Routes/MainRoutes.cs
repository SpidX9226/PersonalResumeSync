using System.Data.Common;

namespace backend.Routes;

public static class MainRoutes
{
    public static void MapRoutes(this IEndpointRouteBuilder app)
    {
        var versionedGroup = app.MapGroup("/api/v1");

        versionedGroup.MapGet("/getCount", async (DbConnection db) =>
        {
            await db.OpenAsync();
            
            await using var cmd = db.CreateCommand();
            cmd.CommandText = "SELECT count FROM button_counter WHERE id = 1;";

            var result = await cmd.ExecuteScalarAsync();
            
            ulong resCount = checked((ulong)(decimal)result!);
            
            return Results.Ok(new { count = resCount });
        });

        versionedGroup.MapPost("/increment", async (DbConnection db) =>
        {
            await db.OpenAsync();
            
            await using var cmd = db.CreateCommand();
            cmd.CommandText = """
                              UPDATE button_counter
                              SET count = count + 1
                              WHERE id = 1;
                              """;
            var affectedRows = await cmd.ExecuteNonQueryAsync();
            
            return affectedRows > 0 ? Results.Ok() : Results.NotFound();
        });

        versionedGroup.MapPost("/refresh", async (DbConnection db) =>
        {
            await db.OpenAsync();
            
            await using var cmd = db.CreateCommand();
            cmd.CommandText = """
                              UPDATE button_counter
                              SET count = 0
                              WHERE id = 1;
                              """;
            var affectedRows = await cmd.ExecuteNonQueryAsync();
            
            return affectedRows > 0 ? Results.Ok() : Results.NotFound();
        });
    }
}