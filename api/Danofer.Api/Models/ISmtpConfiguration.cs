namespace Danofer.Api.Models;

public interface ISmtpConfiguration
{
    string Domain { get; }

    int Port { get; }
}
