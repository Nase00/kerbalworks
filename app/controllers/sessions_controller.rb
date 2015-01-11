class SessionsController < ApplicationController
	include SessionsHelper

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
    	session[:user_id] = user.id
      redirect_to root_url
    else
      render 'new'
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
