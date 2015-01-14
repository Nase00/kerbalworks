class SessionsController < ApplicationController
	include SessionsHelper

  # def create
  #   user = User.find_by(email: params[:session][:email].downcase)
  #   if user && user.authenticate(params[:session][:password])
  #   	session[:user_id] = user.id
  #     redirect_to root_url
  #   else
  #     render 'new'
  #   end
  # end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    respond_to do |format|
        if user and user.authenticate(params[:session][:password])
          session[:user_id] = user.id
          format.html { redirect_to root_path }
          format.json { head :no_content }
          format.js
        else
          format.html { redirect_to login_url, alert: "Wrong login or password!" }
          format.json { render json: "Wrong login or password", status: :unprocessable_entity }
          format.js
      end
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end

 	def log_out
		session[:user_id] = nil
	end
end
