namespace Danofer.Api.Extensions;

public static class StringExtensions
{
    public static bool IsNullOrWhiteSpace(this string self)
    {
        return string.IsNullOrWhiteSpace(self);
    }
}
