using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Dependencies;
using Microsoft.Practices.Unity;
using Jukebox.Auth.Core;
using Jukebox.WebApi.Core.Context;
using Jukebox.WebApi.Core.Services;
using Jukebox.WebApi.Controllers;

namespace Jukebox.WebApi
{
    public class ServiceResolver : IDependencyResolver
    {
        public ServiceResolver()
            : this(Initialize())
        {
        }

        public ServiceResolver(IUnityContainer container)
        {
            if (container == null)
            {
                throw new ArgumentNullException("container");
            }

            this.Container = container;
        }

        public IUnityContainer Container { get; private set; }

        #region IDependencyResolver members

        public object GetService(Type serviceType)
        {
            try
            {
                return Container.Resolve(serviceType);
            }
            catch (ResolutionFailedException)
            {
                return null;
            }
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return Container.ResolveAll(serviceType);
            }
            catch (ResolutionFailedException)
            {
                return new List<object>();
            }
        }

        public IDependencyScope BeginScope()
        {
            var child = Container.CreateChildContainer();
            return new ServiceResolver(child);
        }

        public void Dispose()
        {
            Container.Dispose();
        }

        #endregion

        private static IUnityContainer Initialize()
        {
            var container = new UnityContainer();

            container.RegisterType<JukeboxContext>(new InjectionFactory(c => new JukeboxContext()));

            container.RegisterType<MusicService>(new HierarchicalLifetimeManager());
            container.RegisterType<PlayerService>(new HierarchicalLifetimeManager());

            container.RegisterType<MusicController>(new HierarchicalLifetimeManager());
            container.RegisterType<PlayerController>(new HierarchicalLifetimeManager());

            return container;
        }
    }
}