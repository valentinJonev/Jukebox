using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jukebox.WebApi.Core.Models
{
    public class Song
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string URL { get; set; }
    }
}
