using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jukebox.WebApi.Core.Context;
using Jukebox.WebApi.Core.Models;

namespace Jukebox.WebApi.Core.Services
{
    public class MusicService : BaseService
    {
        private JukeboxContext context;

        public MusicService(JukeboxContext context)
        {
            this.context = context;
        }
        public IEnumerable<Song> GetAsync()
        {
            List<Song> songs = context.Songs.ToList();
            return songs;
        }
    }
}
