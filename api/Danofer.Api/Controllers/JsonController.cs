using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Danofer.Api.Models;

namespace Danofer.Api.Controllers
{
    [ApiController]
    public abstract class JsonController<T> : ControllerBase where T : Model
    {
#nullable enable
        protected async Task<T> ReadModel(Stream? stream)
#nullable disable
        {
            return await JsonSerializer.DeserializeAsync<T>(stream);
        }
    }
}
