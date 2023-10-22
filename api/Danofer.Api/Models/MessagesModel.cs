using System;
using System.Text.Json.Serialization;

using MailKit.Net.Smtp;
using MimeKit;

using EmailValidation;

using Danofer.Api.Extensions;

namespace Danofer.Api.Models;

public class MessagesModel
{
    [JsonPropertyName("senderName")]
    public string SenderName { get; init; } = string.Empty;

    [JsonPropertyName("senderEmailAddress")]
    public string SenderEmailAddress { get; init; } = string.Empty;

    [JsonPropertyName("message")]
    public string Message { get; init; } = string.Empty;

    public ISmtpConfiguration SmtpConfiugration { get; init; }

    public MessagesModel(ISmtpConfiguration smtpConfiguration)
    {
        SmtpConfiugration = smtpConfiguration;
    }

    public bool SendEmail()
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Dan Ofer", "dan@ofer.to"));
        message.To.Add(new MailboxAddress("Dan Ofer", "dan@ofer.to"));
        message.ReplyTo.Add(new MailboxAddress(SenderName, SenderEmailAddress));

        message.Subject = $"{SenderName} contacted you from ofer.to";
        message.Body = new TextPart("plain")
        {
            Text = Message
        };

        using (var client = new SmtpClient())
        {
            client.Connect(SmtpConfiugration.Domain, SmtpConfiugration.Port, false);

            client.Send(message);
            client.Disconnect(true);
        }

        return true;
    }

    public void Validate()
    {
        if (SenderName.IsNullOrWhiteSpace())
        {
            throw new ArgumentException("Name should not be blank", nameof(SenderName));
        }

        if (!EmailValidator.Validate(SenderEmailAddress))
        {
            throw new ArgumentException("Email address is not valid", nameof(SenderEmailAddress));
        }

        if (Message.IsNullOrWhiteSpace())
        {
            throw new ArgumentException("The message should not be empty", nameof(Message));
        }
    }
}
