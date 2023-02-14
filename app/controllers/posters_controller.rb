class PostersController < ApplicationController
  wrap_parameters format: []

  skip_before_action :authorize, only: [:index]

  def index
    render json: Poster.all, status: :ok
  end

  def create
    poster = Poster.create!(poster_params)
    render json: poster, status: :created
  end

  def update
    poster = Poster.find(params[:id])
    poster.update!(poster_params)
    render json: poster, status: :accepted
  end

  def destroy
    poster = Poster.find(params[:id])
    poster.destroy
    render json: {}, status: :no_content
  end

  private

  def poster_params
    params.permit(:id, :band_id, :designer_id, :image, :date, :venue, :location, :edition, :status, :duedate, :budget, :dimensions, :band)
  end

end