using System;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text.Json;

using SendGrid;
using SendGrid.Helpers.Mail;

namespace Danofer.Api.Models
{
    public class MessagesModel
    {
        public static string ReCaptchaSecretKey = "recaptcha_secret_key";
        public static string SendGridSecretKey = "send_grid_api_key";

        public static string ReCaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}";
        public static float Tolerance = 0.8F;

        // TODO use dependency injection instead
        public static readonly HttpClient client = new HttpClient();

        public string ReCaptchaToken { get; init; } = string.Empty;
        public string SenderName { get; init; } = string.Empty;
        public string SenderEmailAddress { get; init; } = string.Empty;
        public string Message { get; init; } = string.Empty;

        public string ReCaptchaSecret
        {
            get
            {
                return Environment.GetEnvironmentVariable(ReCaptchaSecretKey);
            }
        }

        public string SendGridSecret => Environment.GetEnvironmentVariable(SendGridSecretKey);

        public async Task<bool> IsRealUser(HttpClient httpClient)
        {
            var url = string.Format(ReCaptchaUrl, ReCaptchaSecret, ReCaptchaToken);
            var response = await httpClient.GetAsync(url);

            var responseStream = await response.Content.ReadAsStreamAsync();
            var reCaptcha = await JsonSerializer.DeserializeAsync<ReCaptchaModel>(responseStream);

            var responseBody = await response.Content.ReadAsStringAsync();

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
            var sender = new EmailAddress(senderEmailAddress, senderName);
            var subject = "Somebody contacted you from danofer.com";
            var recipient = new EmailAddress("dan@ofer.to", "Dan Jakob Ofer");

            var client = new SendGridClient(SendGridSecret);
            var email = MailHelper.CreateSingleEmail(sender, recipient, subject, message, string.Empty);
            var response = await client.SendEmailAsync(email);

            return response.IsSuccessStatusCode;
        }
    }
}
