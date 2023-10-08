using System;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

using SendGrid;
using SendGrid.Helpers.Mail;
using EmailValidation;

using Danofer.Api.Extensions;

namespace Danofer.Api.Models
{
    public class MessagesModel : IModel
    {
        [JsonPropertyName("senderName")]
        public string SenderName { get; init; } = string.Empty;

        [JsonPropertyName("senderEmailAddress")]
        public string SenderEmailAddress { get; init; } = string.Empty;

        [JsonPropertyName("message")]
        public string Message { get; init; } = string.Empty;

        public string SendGridSecret => Configuration.Config.SendGridApiKey;

        public async Task<bool> SendEmail(string senderName, string senderEmailAddress, string message)
        {
            var subject = "Somebody contacted you from ofer.to";
            var recipient = new EmailAddress("dan@ofer.to", "Dan Ofer");

            var sender = new EmailAddress("dan@ofer.to", "Dan Ofer");
            var replyTo = new EmailAddress(senderEmailAddress, senderName);
            var email = MailHelper.CreateSingleEmail(sender, recipient, subject, message, string.Empty);
            email.SetReplyTo(replyTo);

            var client = new SendGridClient(SendGridSecret);
            var response = await client.SendEmailAsync(email);

            return response.IsSuccessStatusCode;
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
}
