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

            // using (var reader = new StreamReader(HttpContext.Request.Body))
            // {
            // }
            // byte[] buffer = new byte[256];
            //
            // string requestMessage = string.Empty;
            // var builder = new StringBuilder();
            // int bytesRead = int.MaxValue;
            // while (bytesRead > 0) {
            //     bytesRead = await HttpContext.Request.Body.ReadAsync(buffer);
            //
            //     foreach (var b in buffer)
            //     {
            //         builder.Append(b);
            //     }
            // }

            // requestMessage = builder.ToString();
            // System.Console.Write("Hello world\n");
            // System.Console.WriteLine($"ReCaptchaToken: ({reCaptchaToken})");
            // System.Console.WriteLine($"Request message: ({requestMessage})");
            // System.Console.WriteLine($"token: ({token})");

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
