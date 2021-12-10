using System;
using System.Threading.Tasks;
using System.Net.Http;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Danofer.Api.Models;

namespace Danofer.Api.Controllers
{
    public class MessagesController : CorsJsonController<MessagesModel>
    {
        private readonly ILogger<MessagesController> _logger;
        private readonly IHttpClientFactory _clientFactory;

        public MessagesController(ILogger<MessagesController> logger, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            _clientFactory = clientFactory;
        }

        [HttpPost("/messages/create")]
        public async Task<IActionResult> Create()
        {
            var model = await ReadModel(Request.Body);

            // For debugging
            _logger.LogInformation($"{nameof(model.ReCaptchaToken)}: {model.ReCaptchaToken}");
            _logger.LogInformation($"{nameof(model.SenderName)}: {model.SenderName}");
            _logger.LogInformation($"{nameof(model.SenderEmailAddress)}: {model.SenderEmailAddress}");
            _logger.LogInformation($"{nameof(model.Message)}: {model.Message}");

            var isHuman = await model.IsHuman(_clientFactory.CreateClient("default"));
            if (isHuman)
            {
                model.Validate();

                var isSuccess = await model.SendEmail(
                    model.SenderName,
                    model.SenderEmailAddress,
                    model.Message
                );
                if (isSuccess)
                {
                    return Content("Email was sent!");
                }

                throw new Exception("User is valid, but sending email failed");
            }

            var message = "User is probably a bot";
            throw new Exception(message);
        }
    }
}
