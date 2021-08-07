using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using System.Net.Mime;

using Danofer.Api.Models;

namespace Danofer.Api.Controllers
{
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;

        public MessagesController(ILogger<MessagesController> logger)
        {
            _logger = logger;
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

            var isRealUser = await model.IsRealUser();
            if (isRealUser) {
                return Content("Success");
            }

            return Content("Failure");
        }
    }
}
