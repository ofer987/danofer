using System;
using System.Text.Json.Serialization;

namespace Danofer.Api
{
    public class Configuration
    {
        [JsonPropertyName("recaptcha_secret_key")]
        public string ReCaptchaSecretKey { get; set; }

        [JsonPropertyName("send_grid_api_key")]
        public string SendGridApiKey { get; set; }

#nullable enable
        private static Configuration? _config = null;
#nullable disable
        public static Configuration Config
        {
            get
            {
                return _config;
            }

            set
            {
                if (_config is not null)
                {
                    throw new InvalidOperationException($"The {nameof(Configuration)} has already been set");
                }

                _config = value;
            }
        }
    }
}
