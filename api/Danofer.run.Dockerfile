FROM ofer987/danofer:master AS run
WORKDIR /source/Danofer.Api

COPY configuration.json .

CMD dotnet run
