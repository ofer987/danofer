ARG DOCKER_USERNAME
ARG IMAGE_NAME
ARG VERSION
FROM ${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION} AS run
WORKDIR /source/Danofer.Api

COPY configuration.json .

CMD dotnet run --launch-profile "Danofer.Api-Production"
