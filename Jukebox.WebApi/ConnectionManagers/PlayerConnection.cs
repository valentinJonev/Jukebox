namespace Jukebox.WebApi.ConnectionManagers
{
    public class PlayerConnection
    {
        public PlayerConnection(string connectionId, string userName)
        {
            ConnectionId = connectionId;
            UserName = userName;
        }

        public string UserName { get; set; }

        public string ConnectionId { get; set; }

        public override bool Equals(object obj)
        {
            if (obj is PlayerConnection)
            {
                return (obj as PlayerConnection).ConnectionId
                    .Equals(ConnectionId, System.StringComparison.InvariantCulture);
            }

            return false;
        }

        public override int GetHashCode()
        {
            return ConnectionId.GetHashCode();
        }
    }
}