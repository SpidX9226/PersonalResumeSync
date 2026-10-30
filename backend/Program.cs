using System.Data.Common;
using backend.Middleware;
using backend.Routes;
using Npgsql;

namespace backend;

public static class Program 
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var config = builder.Configuration;

        builder.Services.AddSingleton<NpgsqlDataSource>(_ =>
            NpgsqlDataSource.Create(config.GetConnectionString("Default")!)
        );
        
        var app = builder.Build();

        app.UseUniqueVisits();

        app.MapRoutes();
        
        app.Run();
    }
}