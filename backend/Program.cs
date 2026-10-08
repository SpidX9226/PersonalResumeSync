using System.Data.Common;
using backend.Routes;
using Npgsql;

namespace backend;

public static class Program 
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var config = builder.Configuration;

        builder.Services.AddScoped<DbConnection>(_ =>
            new NpgsqlConnection(config.GetConnectionString("Default"))
        );
        
        var app = builder.Build();
        
        app.MapRoutes();
        
        app.Run();
    }
}