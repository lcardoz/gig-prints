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

  def authorize
    unless current_band || current_designer
       render json: { error: "Not Authorized" }, status: :unauthorized
    end
    # render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :designer_id
    # took out :band_id || for authorize
  end

  def current_band
    @current_band ||= Band.find(session[:band_id])
  end

  def current_designer
    @current_designer ||= Designer.find(session[:designer_id])
  end

end
