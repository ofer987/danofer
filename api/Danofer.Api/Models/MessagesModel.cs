using System;
using System.Text.Json.Serialization;

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
