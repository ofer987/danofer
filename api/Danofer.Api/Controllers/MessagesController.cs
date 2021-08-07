using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text;
using System.Threading.Tasks;
using System.IO;

using Danofer.Api.Models;

namespace Danofer.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly ILogger<MessagesController> _logger;

        public MessagesController(ILogger<MessagesController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("/verify/{token}/messages/create")]
        public async Task<IActionResult> Create(
            string token,
            string reCaptchaToken,
            string senderName,
            string senderEmailAddress,
            string message
        )
        {
            reCaptchaToken = Request.Form[nameof(reCaptchaToken)];
            senderName = Request.Form[nameof(senderName)];
            senderEmailAddress = Request.Form[nameof(senderEmailAddress)];
            message = Request.Form[nameof(message)];

            var messages = new MessagesModel
            {
                ReCaptchaToken = reCaptchaToken,
                SenderName = senderName,
                SenderEmailAddress = senderEmailAddress,
                Message = message
            };

            var isRealUser = await messages.IsRealUser();
            if (isRealUser) {
                return Content("Success");
            }

            return Content("Failure");
        }
    }
}
