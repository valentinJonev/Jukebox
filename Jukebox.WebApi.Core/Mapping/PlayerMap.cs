using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Jukebox.WebApi.Core.Models;

namespace Jukebox.WebApi.Core.Mapping
{
    public class PlayerMap : EntityTypeConfiguration<Player>
    {
        public PlayerMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Id)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity)
                .IsRequired();

            this.Property(t => t.Name)
                .IsRequired();

            this.ToTable("T_PLAYER");
        }
    }
}
