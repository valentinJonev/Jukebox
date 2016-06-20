using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Jukebox.WebApi.Core.Models;

namespace Jukebox.WebApi.Core.Mapping
{
    public class SongMap : EntityTypeConfiguration<Song>
    {
        public SongMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Id)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity)
                .IsRequired();

            this.Property(t => t.Name)
                .IsRequired();

            this.Property(t => t.URL)
                .IsRequired();

            this.ToTable("T_SONG");
        }
    }
}
