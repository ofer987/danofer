# frozen_string_literal: true

require 'rest-client'
require_relative '../imgix_settings'

module Middleware
  # Rack middleware for Imgix requests.
  class Imgix
    def initialize(app)
      @app = app
    end

    def call(env)
      env[IMGIX_ENABLED_CONSTANT] = imgix_enabled?

      @app.call(env)
    end

    def imgix_enabled?
      url = 'https://6ae5f30bf7d979b189ba2839.imgix.net/sandbox/main.jpg?auto=format,compress'

      RestClient.get url

      true
    rescue RestClient::Exception => e
      logger.error "Imgix required failed for #{url} with error: #{e.message}"

      false
    rescue StandardError => e
      message = "Imgix required failed for #{url} with error: #{e.message}"

      logger.error message
      abort message
    end
  end
end
