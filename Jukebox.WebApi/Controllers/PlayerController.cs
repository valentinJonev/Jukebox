using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Jukebox.WebApi.Common;
using Jukebox.WebApi.Core.Models;
using Jukebox.WebApi.Core.Services;

namespace Jukebox.WebApi.Controllers
{
    [RoutePrefix("api/player")]
    public class PlayerController : BaseApiController
    {
        private PlayerService service;

        public PlayerController(PlayerService service)
        {
            this.service = service;
        }

        [HttpGet, Route("list")]
        public IHttpActionResult List()
        {
            IEnumerable<Player> players = this.service.GetAll();
            return Ok(players);
        }
    }
}
