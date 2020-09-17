using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace SenaiVagasAPI
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers()

                    .AddNewtonsoftJson(options =>
                    {
                        // Ignora valores nulos ao fazer jun��es nas consultas
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
                        //Quem est� solicitando 
                        ValidateIssuer = true,

                        //Quem est� validando
                        ValidateAudience = true,

                        //Tempo de expira��o 
                        ValidateLifetime = true,

                        //Forma de criptografia 
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Senai_Vagas-chave-autenticacao")),

                        //Tempo de expira��o do token 
                        ClockSkew = TimeSpan.FromMinutes(30),

                        //Nome da Issuer, de onde est� vindo 
                        ValidIssuer = "SenaiVagasAPI",

                        //Nome da audience, de onde est� vindo 
                        ValidAudience = "SenaiVagasAPI"
                    };

                });

        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }            

            app.UseRouting();

            // Habilita o Uso da Autentica��o
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
