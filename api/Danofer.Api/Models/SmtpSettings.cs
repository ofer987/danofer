namespace Danofer.Api.Models;

public record SmtpSettings
{
    public string Domain { get; set; } = "localhost";

    public int Port { get; set; } = 25;

    public override string ToString()
    {
        return $"{Domain}:{Port}";
    }
}
