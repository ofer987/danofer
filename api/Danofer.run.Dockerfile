FROM danofer_run:latest AS run
WORKDIR /source/Danofer.Api
ARG send_grid_api_key
ARG recaptcha_secret_key

ENV send_grid_api_key="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"
ENV recaptcha_secret_key="6LdxCdMbAAAAAOJ72V_CmNco0WUoCCZI4GJ5_2To"

CMD dotnet run
