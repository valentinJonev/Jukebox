using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Jukebox.WebApi.Common;
using Jukebox.WebApi.Core.Models;
using Jukebox.WebApi.Core.Services;

namespace Jukebox.WebApi.Controllers
{
    [RoutePrefix("api/music")]
    public class MusicController : BaseApiController
    {
        private MusicService service;
        public MusicController(MusicService service)
        {
            this.service = service;
        }

        [HttpGet, Route("list")]
        public IHttpActionResult Details()
        {
            IEnumerable<Song> songs = service.GetAsync();

            return Ok(songs);
        }

        [HttpPost, Route("upload")]
        public IHttpActionResult Upload()
        {
#warning future feature
            throw new NotImplementedException();
        }
    }
}
