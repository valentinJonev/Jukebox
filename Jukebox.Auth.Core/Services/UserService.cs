using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Jukebox.Auth.Core.Context;
using Jukebox.Auth.Core.ViewModels;

namespace Jukebox.Auth.Core.Services
{
    public class UserService
    {
        private UserManager<IdentityUser> userManager;

        public UserService(AuthContext context)
        {
            userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(context));
        }

        public Task<IdentityResult> CreateAsync(UserCreateModel model)
        {
            var user = new IdentityUser()
            {
                UserName = model.Username
            };

            return userManager.CreateAsync(user, model.Password);
        }
    }
}
