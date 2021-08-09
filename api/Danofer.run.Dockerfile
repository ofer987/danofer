FROM ofer987/danofer:master AS run
WORKDIR /source/Danofer.Api
ARG send_grid_api_key
ARG recaptcha_secret_key

ENV send_grid_api_key="${send_grid_api_key}"
ENV recaptcha_secret_key="{recaptcha_secret_key}"

CMD dotnet run
