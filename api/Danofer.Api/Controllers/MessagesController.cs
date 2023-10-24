using System;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using MailKit.Net.Smtp;
using MimeKit;

using Danofer.Api.Models;

namespace Danofer.Api.Controllers;

public class MessagesController : CorsJsonController<MessagesModel>
{
    private readonly ILogger<MessagesController> _logger;
    private readonly IHttpClientFactory _clientFactory;
    private readonly SmtpSettings _SmtpConfiugration;

    public MessagesController(ILogger<MessagesController> logger, IHttpClientFactory clientFactory, SmtpSettings smtpConfiguration)
    {
        _logger = logger;
        _clientFactory = clientFactory;
        _SmtpConfiugration = smtpConfiguration;
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
            SendEmail(model);

            return new OkObjectResult(new
            {
                title = "email-sent",
                detail = "The email was sent"
            });
        }
        catch (Exception exception)
        {
            _logger.LogError($"Error: {exception.Message} ({exception.GetType().FullName}): ${exception.Message}");

            return Problem(
                title: "email-not-sent",
                detail: "The email was not sent",
                statusCode: (int)HttpStatusCode.BadRequest
            );
        }
    }

    private bool SendEmail(MessagesModel model)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Dan Ofer", "dan@ofer.to"));
        message.To.Add(new MailboxAddress("Dan Ofer", "dan@ofer.to"));
        message.ReplyTo.Add(new MailboxAddress(model.SenderName, model.SenderEmailAddress));

        message.Subject = $"{model.SenderName} contacted you from ofer.to";
        message.Body = new TextPart("plain")
        {
            Text = model.Message
        };

        using (var client = new SmtpClient())
        {
            client.Connect(_SmtpConfiugration.Domain, _SmtpConfiugration.Port, false);

            client.Send(message);
            client.Disconnect(true);
        }

        return true;
    }

}
