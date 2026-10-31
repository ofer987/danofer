# frozen_string_literal: true

class HomePageController < ImgixController
  def index
    @main_image = wrap_imgix('main.jpg')
  end
end
