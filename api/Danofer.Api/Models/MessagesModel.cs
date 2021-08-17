using System;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text.Json;

using SendGrid;
using SendGrid.Helpers.Mail;
using EmailValidation;

using Danofer.Api.Extensions;

namespace Danofer.Api.Models
{
    public class MessagesModel
    {
        public static string ReCaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}";
        public static float Tolerance = 0.8F;

        public string ReCaptchaToken { get; init; } = string.Empty;
        public string SenderName { get; init; } = string.Empty;
        public string SenderEmailAddress { get; init; } = string.Empty;
        public string Message { get; init; } = string.Empty;

        public string ReCaptchaSecret => Configuration.Config.ReCaptchaSecretKey;
        public string SendGridSecret => Configuration.Config.SendGridApiKey;


        public async Task<bool> IsRealUser(HttpClient httpClient)
        {
            var url = string.Format(ReCaptchaUrl, ReCaptchaSecret, ReCaptchaToken);
            var response = await httpClient.GetAsync(url);

            var responseStream = await response.Content.ReadAsStreamAsync();
            var reCaptcha = await JsonSerializer.DeserializeAsync<ReCaptchaModel>(responseStream);

            var responseBody = await response.Content.ReadAsStringAsync();

            System.Console.WriteLine(url);
            System.Console.WriteLine(reCaptcha);
            System.Console.WriteLine(responseBody);

            if (!reCaptcha.Success)
            {
                return false;
            }

            if (reCaptcha.Score >= Tolerance)
            {
                return true;
            }

            return false;
        }

        public async Task<bool> SendEmail(string senderName, string senderEmailAddress, string message)
        {
            var subject = "Somebody contacted you from danofer.com";
            var recipient = new EmailAddress("dan@ofer.to", "Dan Jakob Ofer");

            var sender = new EmailAddress("admin@danofer.com", "Danofer.com");
            var replyTo = new EmailAddress(senderEmailAddress, senderName);
            var email = MailHelper.CreateSingleEmail(sender, recipient, subject, message, string.Empty);
            email.SetReplyTo(replyTo);

            var client = new SendGridClient(SendGridSecret);
            var response = await client.SendEmailAsync(email);

            return response.IsSuccessStatusCode;
        }

        public bool IsValid()
        {
            if (SenderName.IsNullOrWhiteSpace())
            {
                throw new ArgumentException("Name should not be blank");
            }

            if (!EmailValidator.Validate(SenderEmailAddress))
            {
                throw new ArgumentException("Email address is not valid");
            }

            if (Message.IsNullOrWhiteSpace())
            {
                throw new ArgumentException("The message should not be empty");
            }

            return true;
        }
    }
}
