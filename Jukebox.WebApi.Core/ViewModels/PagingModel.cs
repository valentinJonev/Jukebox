using System.ComponentModel.DataAnnotations;

namespace Jukebox.WebApi.Core.ViewModels
{
    public class PagingModel
    {
        [Required]
        public int? Offset { get; set; }

        [Required]
        public int? Limit { get; set; }
    }
}
