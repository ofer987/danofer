namespace Danofer.Api.Models;

public class DevelopmentSmtpConfiguration : ISmtpConfiguration
{
    public string Domain => "localhost";

    public int Port => 25;
}
