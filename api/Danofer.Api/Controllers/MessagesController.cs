﻿using System;
using System.Threading.Tasks;
using System.Net;
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
            _logger.LogInformation($"{nameof(model.SenderName)}: {model.SenderName}");
            _logger.LogInformation($"{nameof(model.SenderEmailAddress)}: {model.SenderEmailAddress}");
            _logger.LogInformation($"{nameof(model.Message)}: {model.Message}");

            try
            {
                model.Validate();
            }
            catch (ArgumentException exception)
            {
                return Problem(
                    title: exception.ParamName,
                    detail: $"Missing {exception.ParamName}",
                    statusCode: (int)HttpStatusCode.BadRequest
                );
            }

            try
            {
                model.SendEmail();

                return new OkObjectResult(new
                {
                    title = "email-sent",
                    detail = "The email was sent"
                });
            }
            catch (Exception)
            {
                return Problem(
                    title: "email-not-sent",
                    detail: "The email was not sent",
                    statusCode: (int)HttpStatusCode.BadRequest
                );
            }
        }
    }
}
