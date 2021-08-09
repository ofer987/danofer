FROM ofer987/danofer:master AS run
WORKDIR /source/Danofer.Api
ARG send_grid_api_key
ARG recaptcha_secret_key

ENV SEND_GRID_API_KEY="${send_grid_api_key}"
ENV RECAPTCHA_SECRET_KEY="{recaptcha_secret_key}"

CMD dotnet run
