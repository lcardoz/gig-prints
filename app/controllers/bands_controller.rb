class BandsController < ApplicationController
  wrap_parameters format: []
  
  skip_before_action :authorize, only: [:index, :create, :show_different_band]

  def index
    render json: Band.all.order(:name), status: :ok
  end

  def show
    band = Band.find_by(id: session[:band_id])
    render json: band, status: :ok
  end

  def create
    band = Band.create!(band_params)
    render band, status: :created
  end

  def update
    band = Band.find_by(id: session[:band_id])
    band.update!(band_params)
    render json: band, status: :accepted
  end

  def show_different_band
    render json: Band.find(params[:id]), status: :ok
  end

  private

  def band_params
    params.permit(:name, :username, :password, :instagram, :website, :location, :image, :bio, :on_tour, :email)
  end

end
