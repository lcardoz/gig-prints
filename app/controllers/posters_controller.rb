class PostersController < ApplicationController
  wrap_parameters format: []

  skip_before_action :authorize, only: [:index]

  def index
    render json: Poster.all, status: :ok
  end

  # def index
  #   render json: Poster.all, status: :ok
  #   if session[:user_id]
  #     band = Band.find_by(id: session[:user_id])
  #     render json: band.posters, status: :ok
  #   if session[:user_id]
  #     designer = Designer.find_by(id: session[:user_id])
  #     render json: designer.posters, status: :ok
  #   else
  #     render json: { error: "Please log in" }, status: :not_found
  #   end
  # end

  def create
    poster = Poster.create!(poster_params)
    render json: poster, status: :created
  end

  def destroy
    poster = Poster.find(params[:id])
    poster.destroy
    render json: {}, status: :no_content
  end


  private

  def poster_params
    params.permit(:band_id, :designer_id, :image, :date, :venue, :location, :edition, :status, :duedate, :budget, :dimensions)
  end

end