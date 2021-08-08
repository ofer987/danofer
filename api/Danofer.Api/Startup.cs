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
        public static string WwwDanoferPolicy = "CORS_POLICY_WWW_DANOFER_COM";

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
                    WwwDanoferPolicy,
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:8000");
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
            }
            else
            {
                app.UseHttpsRedirection();
            }

            app.UseRouting();
            app.UseCors(WwwDanoferPolicy);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            SetConfiguration();
        }

        private void SetConfiguration()
        {
            var text = File.ReadAllText("../configuration.json");

            Danofer.Api.Configuration.Config = JsonSerializer.Deserialize<Danofer.Api.Configuration>(text);
        }
    }
}
