class DesignersController < ApplicationController

  skip_before_action :authorize, only: [:index, :create, :show_different_designer]

  def index
    render json: Designer.all.order(:name), status: :ok
  end

  def show
    designer = Designer.find_by(id: session[:designer_id])
    render json: designer, status: :ok
  end

  def create
    designer = Designer.create!(designer_params)
    render designer, status: :created
  end

  def update
    designer = Designer.find_by(id: session[:designer_id])
    designer.update!(designer_params)
    render json: designer, status: :accepted
  end

  def show_different_designer
    render json: Designer.find(params[:id]), status: :ok
  end

  private

  def designer_params
    params.permit(:name, :username, :password, :instagram, :website, :location, :image, :bio, :open_to_work)
  end

end

