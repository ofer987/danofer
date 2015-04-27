class PresentationsController < ApplicationController
  before_action :set_presentation, only: [:show]

  # GET /presentations
  # GET /presentations.json
  def index
    @presentations = Presentation.all
  end

  # GET /presentations/1
  # GET /presentations/1.json
  def show
    send_file "public/#{@presentation.filename}", type: 'application/pdf', disposition: 'inline'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_presentation
      @presentation = Presentation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def presentation_params
      params.require(:presentation).permit(:name, :presented_at, :location, :filename)
    end
end
