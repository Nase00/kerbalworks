class UsersController < ApplicationController
  def index
  	@users = User.all
  end

	def new
	 logged_in? ? redirect_to(root_path) : @user = User.new
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

	def user_params
    params.require(:user).permit(:username, :email, :password, :salt, :encrypted_password)
  end
end
