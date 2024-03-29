using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using Danofer.Api.Models;

namespace Danofer.Api;

public class Startup
{
    public static string ProductionPolicy = "CORS_POLICY_WWW_OFER_TO";
    public static string DevelopmentPolicy = "CORS_POLICY_LOCALHOST";
    public static string SMTP_OPTIONS = "SMTP";

    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
        Configuration = configuration;
        HostingEnvironment = env;
    }

    public IConfiguration Configuration { get; }
    public Microsoft.AspNetCore.Hosting.IWebHostEnvironment HostingEnvironment { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddHttpClient();
        services.AddControllers();

        services.AddCors(options =>
        {
            options.AddPolicy(
                DevelopmentPolicy,
                builder =>
                {
                    builder
                        .WithOrigins("http://localhost:5173");
                });

            options.AddPolicy(
                ProductionPolicy,
                builder =>
                {
                    builder.WithOrigins("https://ofer.to", "https://www.ofer.to");
                });
        });


        services.Configure<SmtpSettings>(Configuration.GetSection(SMTP_OPTIONS));
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();

            app.UseCors(DevelopmentPolicy);
            System.Console.WriteLine("Development mode");
        }
        else
        {
            app.UseCors(ProductionPolicy);
            System.Console.WriteLine("Production mode");
        }

        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
