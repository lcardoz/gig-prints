class DesignersController < ApplicationController

  skip_before_action :authorize, only: [:index, :create]

  def index
    render json: Designer.all, status: :ok
  end

  def show
    designer = Designer.find_by(id: session[:user_id])
    if designer
      render json: designer, status: :ok
    else
      render json: { error: "Not Authorized" }, status: :unauthorized
    end
  end

  def create
    designer = Designer.create!(designer_params)
    render designer, status: :created
  end

  def update
    designer = Designer.find_by(id: session[:user_id])
    designer.update!(designer_params)
    render json: designer, status: :accepted
  end

  # def show_self
  #   render json: Designer.find(params[:id]), status: :ok
  # end

  private

  def designer_params
    params.permit(:name, :username, :password, :instagram, :website, :location, :image, :bio, :open_to_work)
  end

end

