using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Jukebox.Auth.ConnectionManagers;

namespace Jukebox.Auth
{
    [HubName("UsersListHub")]
    [Authorize]
    public class UsersListHub : Hub
    {
        private static readonly UserConnectionManager manager = new UserConnectionManager();

        public override Task OnConnected()
        {
            manager.AddConnection(Context.Request.User.Identity as ClaimsIdentity, Context.ConnectionId);
            SetUsersList(Context.ConnectionId);

            return base.OnConnected();
        }

        public override Task OnReconnected()
        {
            manager.AddConnection(Context.Request.User.Identity as ClaimsIdentity, Context.ConnectionId);
            SetUsersList(Context.ConnectionId);

            return base.OnReconnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            manager.RemoveConnection(Context.Request.User.Identity as ClaimsIdentity, Context.ConnectionId);
            SetUsersList(Context.ConnectionId);

            return base.OnDisconnected(stopCalled);
        }

        public void PlaySong(string jukeboxId, string songUrl)
        {
            UserConnection player = manager.GetConnection(jukeboxId);
            Clients.Clients(player.ConnectionIds.ToList()).handlePlay(songUrl);
        }

        public void PauseSong(string jukeboxId)
        {
            UserConnection player = manager.GetConnection(jukeboxId);
            Clients.Clients(player.ConnectionIds.ToList()).handlePause();
        }

        private void SetUsersList(string connectionId)
        {
            List<UserModel> allUsers = manager.Connections.Values
                .Select(x => x.User).ToList();

            Clients.All.setUsersList(allUsers);
        }
    }
}
