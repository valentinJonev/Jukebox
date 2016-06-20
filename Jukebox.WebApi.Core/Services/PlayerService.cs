using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jukebox.WebApi.Core.Context;
using Jukebox.WebApi.Core.Models;

namespace Jukebox.WebApi.Core.Services
{
    public class PlayerService : BaseService
    {
        private JukeboxContext context;

        public PlayerService(JukeboxContext context)
        {
            this.context = context;
        }

        public IEnumerable<Player> GetAll()
        {
            return this.context.Players.ToList();
        }
    }
}
