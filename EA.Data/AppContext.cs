using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using System.IO;
using System;

using EA.Domain;

namespace EA.Data
{
    public class AppContext : DbContext
    {
        private readonly string _connectionString;

        public DbSet<User> Users { get; set; }

        #region CTOR
        public AppContext()
        { }

        public AppContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        #endregion


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string dbPath = Path.GetFullPath(Path.Combine(Environment.CurrentDirectory, @"../", "EA.Data/Database/", "database.db"));

            optionsBuilder.UseSqlite($"Filename={dbPath}", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });


            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
