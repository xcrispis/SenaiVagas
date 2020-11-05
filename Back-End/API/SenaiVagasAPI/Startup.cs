using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace SenaiVagasAPI
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "senaivagas-front";
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //Configurações do cors
            services
               .AddCors(options =>
               {
                   options.AddPolicy(name: MyAllowSpecificOrigins, builder =>
                   {
                       builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                   });
               });
            services.AddControllers()

                    .AddNewtonsoftJson(options =>
                    {
                        // Ignora valores nulos ao fazer junções nas consultas
                        options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                        // Ignora os loopings nas consultas
                        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    });

            // Configurando o JWT 
            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })

                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        //Quem está solicitando 
                        ValidateIssuer = true,

                        //Quem está validando
                        ValidateAudience = true,

                        //Tempo de expiração 
                        ValidateLifetime = true,

                        //Forma de criptografia 
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Senai_Vagas-chave-autenticacao")),

                        //Tempo de expiração do token 
                        ClockSkew = TimeSpan.FromMinutes(30),

                        //Nome da Issuer, de onde está vindo 
                        ValidIssuer = "SenaiVagasAPI",

                        //Nome da audience, de onde está vindo 
                        ValidAudience = "SenaiVagasAPI"
                    };

                });

            services.AddSwaggerGen(c => 
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SenaiVagasAPI", Version = "v1" });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // cors
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); 

            app.UseRouting();

            // Habilita o Uso da Autenticação
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseSwagger(c =>
            {
                c.SerializeAsV2 = true;
            });

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "SenaiVagasAPI");
                c.RoutePrefix = string.Empty;
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}