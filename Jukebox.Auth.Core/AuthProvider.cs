﻿using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Jukebox.Auth.Core.Context;

namespace Jukebox.Auth.Core
{
    public class AuthProvider
    {
        public AuthProvider()
            : this(new AuthContext())
        {
        }

        public AuthProvider(AuthContext context)
        {
            var userStore = new UserStore<IdentityUser>(context);
            UserManager = new UserManager<IdentityUser>(userStore);
        }

        public UserManager<IdentityUser> UserManager { get; private set; }
    }
}
