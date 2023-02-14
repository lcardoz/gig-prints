class SessionsController < ApplicationController

  skip_before_action :authorize, only: [:create_band_session, :create_designer_session]

  def create_band_session
    band = Band.find_by(username: params[:username])
    if band&.authenticate(params[:password])
      session[:band_id] = band.id
      render json: band, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end
  
  def create_designer_session
    designer = Designer.find_by(username: params[:username])
    if designer&.authenticate(params[:password])
      session[:designer_id] = designer.id
      render json: designer, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy

    if(session[:band_id])
      session.delete :band_id
    else
      session.delete :designer_id
    end
    head :no_content
  end

end
