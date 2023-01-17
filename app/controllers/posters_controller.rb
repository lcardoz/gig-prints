class PostersController < ApplicationController

  skip_before_action :authorize, only: [:index]

  # NEED: 
  # get all completed posters (status: complete) of a designer on their profile
  # get all posters of a band in 'my projects'
  # get all posters of a designer in 'my projects'
  # get unassigned posters (status: unassigned) of a band on their profile in 'open projects'



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