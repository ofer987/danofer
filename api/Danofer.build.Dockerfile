FROM mcr.microsoft.com/dotnet/sdk:5.0	AS build
WORKDIR /source

COPY Danofer.sln .
COPY Danofer.Api/ Danofer.Api/

RUN dotnet restore
RUN dotnet clean
RUN dotnet build
