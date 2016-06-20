using System.Linq;
using Jukebox.WebApi.Core.ViewModels;

namespace Jukebox.WebApi.Core.Services
{
    public abstract class BaseService
    {
        protected static IQueryable<T> ApplyPaging<T>(IQueryable<T> query, PagingModel paging)
        {
            if (paging.Offset.HasValue && paging.Offset.Value > 0)
            {
                query = query.Skip(paging.Offset.Value);
            }

            if (paging.Limit.HasValue && paging.Limit.Value > 0)
            {
                query = query.Take(paging.Limit.Value);
            }

            return query;
        }
    }
}
