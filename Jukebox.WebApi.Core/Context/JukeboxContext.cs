using System.Data.Entity;
using Jukebox.Auth.Core.Context;
using Jukebox.WebApi.Core.Mapping;
using Jukebox.WebApi.Core.Migrations;
using Jukebox.WebApi.Core.Models;

namespace Jukebox.WebApi.Core.Context
{
    public class JukeboxContext : AuthContext
    {
        public JukeboxContext()
            : base("JukeboxContext")
        {
            SetInitializer();
            
            Songs = Set<Song>();
            Players = Set<Player>();
        }

        public DbSet<Song> Songs { get; private set; }
        public DbSet<Player> Players { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new SongMap());
            modelBuilder.Configurations.Add(new PlayerMap());

            base.OnModelCreating(modelBuilder);
        }

        public static void SetInitializer()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<JukeboxContext, Configuration>());
        }
    }
}
