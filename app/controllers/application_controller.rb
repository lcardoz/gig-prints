class ApplicationController < ActionController::API

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
  
  before_action :authorize
  
  private

  def render_not_found_response (error)
    render json: {error: "#{error.model} not found."}, status: :not_found
  end

  def render_invalid_response (invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def current_user
    if session[:band_id]
      @user = Band.find session[:band_id]
    elsif session[:designer_id]
      @user = Designer.find session[:designer_id]
    end
  end

  def logged_in?
    !!current_user
  end

  def authorize
    render json: { error: "Not Authorized" }, status: :unauthorized unless logged_in?
  end
end
