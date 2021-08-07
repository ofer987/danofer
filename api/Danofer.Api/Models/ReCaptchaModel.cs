using System.Text.Json.Serialization;

namespace Danofer.Api.Models
{
    public class ReCaptchaModel
    {
        [JsonPropertyName("success")]
        public bool Success { get; init; }

        [JsonPropertyName("score")]
        public float Score { get; init; }

        public override string ToString()
        {
            if (Success)
            {
                return $"Success! Has a Score of {Score}";
            }

            return $"Failure! Has a Score of {Score}";
        }
    }
}
