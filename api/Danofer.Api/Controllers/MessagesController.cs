using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using System.Net.Mime;
using System.Net.Http;

using Danofer.Api.Models;

namespace Danofer.Api.Controllers
{
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly IHttpClientFactory _clientFactory;

        public MessagesController(ILogger<MessagesController> logger, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            _clientFactory = clientFactory;
        }

        [HttpPost()]
        [Consumes(MediaTypeNames.Application.Json)]
        [Route("/verify/{token}/messages/create")]
        public async Task<IActionResult> Create(string token, MessagesModel model)
        {
            // For debugging
            // System.Console.WriteLine(token);
            // System.Console.WriteLine(model.ReCaptchaToken);
            // System.Console.WriteLine(model.SenderName);
            // System.Console.WriteLine(model.SenderEmailAddress);
            // System.Console.WriteLine(model.Message);

            var isRealUser = await model.IsRealUser(_clientFactory.CreateClient("default"));
            if (isRealUser) {
                return Content("Success");
            }

            return Content("Failure");
        }
    }
}
