﻿using System;
using System.Threading.Tasks;
using System.Net.Mime;
using System.Net.Http;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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
            _logger.LogInformation(token);
            _logger.LogInformation(model.ReCaptchaToken);
            _logger.LogInformation(model.SenderName);
            _logger.LogInformation(model.SenderEmailAddress);
            _logger.LogInformation(model.Message);

            var isRealUser = await model.IsRealUser(_clientFactory.CreateClient("default"));
            if (isRealUser)
            {
                try
                {
                    if (!model.IsValid())
                    {
                        var error = "Your request could not be submitted";
                        _logger.LogDebug(error);

                        throw new ArgumentException(error);
                    }
                }
                catch (Exception exception)
                {
                    // TODO: catch all the exceptions by setting a rule in Startup.cs
                    _logger.LogDebug(exception, exception.Message);

                    throw;
                }

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
            _logger.LogDebug(message);
            throw new Exception(message);
        }
    }
}