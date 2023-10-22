namespace Danofer.Api.Models;

public class ProductionSmtpConfiguration : ISmtpConfiguration
{
    public string Domain => "mailserver";

    public int Port => 25;
}
