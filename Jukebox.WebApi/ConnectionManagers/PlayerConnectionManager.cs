using System;
using System.Collections.Generic;
using System.Linq;

namespace Jukebox.WebApi.ConnectionManagers
{
    public class PlayerConnectionManager
    {
        public PlayerConnectionManager()
        {
            Connections = new Dictionary<int, ISet<PlayerConnection>>();
        }

        // <gameId, <connectionsId>>
        public IDictionary<int, ISet<PlayerConnection>> Connections { get; private set; }

        public void AddConnection(int gameId, string connectionId, string userName)
        {
            lock (Connections)
            {
                ISet<PlayerConnection> cnns;
                if (!Connections.TryGetValue(gameId, out cnns))
                {
                    cnns = new HashSet<PlayerConnection>();
                    Connections.Add(gameId, cnns);
                }

                lock (cnns)
                {
                    cnns.Add(new PlayerConnection(connectionId, userName));
                }
            }
        }

        public int RemoveConnection(string connectionId)
        {
            lock (Connections)
            {
                foreach (int gameId in Connections.Keys)
                {
                    ISet<PlayerConnection> connections = Connections[gameId];
                    if (RemoveFromSet(gameId, connections, connectionId))
                    {
                        return gameId;
                    }
                }
            }

            return -1;
        }

        private bool RemoveFromSet(int gameId, ISet<PlayerConnection> connections, string connectionId)
        {
            lock (connections)
            {
                foreach (PlayerConnection conn in connections)
                {
                    if (conn.ConnectionId.Equals(connectionId, StringComparison.InvariantCultureIgnoreCase))
                    {
                        connections.Remove(conn);

                        if (connections.Count < 1)
                        {
                            Connections.Remove(gameId);
                        }

                        return true;
                    }
                }
            }

            return false;
        }

        public IList<string> GetConnectionIds(int gameId)
        {
            ISet<PlayerConnection> cnns;
            if (Connections.TryGetValue(gameId, out cnns))
            {
                return cnns.Select(x => x.ConnectionId).Distinct().ToList();
            }

            return new List<string>();
        }

        public IList<string> GetUserNames(int gameId)
        {
            ISet<PlayerConnection> cnns;
            if (Connections.TryGetValue(gameId, out cnns))
            {
                return cnns.Select(x => x.UserName).Distinct().ToList();
            }

            return new List<string>();
        }
    }
}