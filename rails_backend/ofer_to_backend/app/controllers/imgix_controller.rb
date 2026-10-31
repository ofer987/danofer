# frozen_string_literal: true

class ImgixController < ApplicationController
  # Imgix-Enabled Controller

  protected

  def wrap_imgix(image)
    return "https://6ae5f30bf7d979b189ba2839.imgix.net/sandbox/#{image}?auto=format,compress" if imgix_enabled?

    image
  end

  def imgix_enabled?
    return false if request.env[IMGIX_ENABLED_CONSTANT].blank?

    request.env[IMGIX_ENABLED_CONSTANT] == true
  end
end
