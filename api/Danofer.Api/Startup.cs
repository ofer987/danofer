using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

using System.IO;
using System.Text.Json;

namespace Danofer.Api
{
    public class Startup
    {
        public static string DanoferPolicy = "CORS_POLICY_WWW_DANOFER_COM";
        public static string DevelopmentPolicy = "CORS_POLICY_LOCALHOST";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpClient();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Danofer.Api", Version = "v1" });
            });

            services.AddCors(options =>
            {
                options.AddPolicy(
                    DevelopmentPolicy,
                    builder =>
                    {
                        builder
                            .WithOrigins("http://localhost:8000");
                    });

                options.AddPolicy(
                    DanoferPolicy,
                    builder =>
                    {
                        builder.WithOrigins("https://danofer.com", "https://www.danofer.com");
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Danofer.Api v1"));

                app.UseCors(DevelopmentPolicy);
                System.Console.WriteLine("Development mode");
            }
            else
            {
                app.UseCors(DanoferPolicy);
                System.Console.WriteLine("Production mode");
            }

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            SetConfiguration();
        }

        private void SetConfiguration()
        {
            var text = File.ReadAllText("./configuration.json");

            Danofer.Api.Configuration.Config = JsonSerializer.Deserialize<Danofer.Api.Configuration>(text);
        }
    }
}
