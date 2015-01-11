class UsersController < ApplicationController
	include SessionsHelper

  def index
  	@users = User.all
  end

	def new
    @user = User.new
	end

	def create
	  @user = User.new(user_params)
	  if @user.save
	  	session[:user_id] = @user.id
	    redirect_to :action => :index
	  else
	    render 'new'
	  end
	end

	def show
		@user = current_user
	end

	def user_params # wtf does this even do?
    params.require(:user).permit(:name, :email, :password, :salt, :encrypted_password)
  end
end
