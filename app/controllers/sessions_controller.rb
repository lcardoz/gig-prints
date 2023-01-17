class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create_band_session, :create_designer_session]

  def create_band_session
    band = Band.find_by(username: params[:username])
    if band&.authenticate(params[:password])
      session[:user_id] = band.id
      render json: band, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end
  
  def create_designer_session
    designer = Designer.find_by(username: params[:username])
    if designer&.authenticate(params[:password])
      session[:user_id] = designer.id
      render json: designer, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

end
