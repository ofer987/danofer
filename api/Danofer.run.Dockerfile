ARG DOCKER_USERNAME
ARG IMAGE_NAME
ARG VERSION

FROM mcr.microsoft.com/dotnet/sdk:6.0	AS build
WORKDIR /source

COPY Danofer.sln .
COPY Danofer.Api/ Danofer.Api/

RUN dotnet restore
RUN dotnet clean
RUN dotnet build

WORKDIR /source/Danofer.Api
CMD dotnet run --launch-profile "Danofer.Api-Production"
