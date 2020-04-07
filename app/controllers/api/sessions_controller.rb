
class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: "invalid"
      }
    end
  end

  def get_current_user
    if logged_in?
      render json: current_user
    else
      render json: {
        error: "No one logged in"
      }
    end
  end

end
