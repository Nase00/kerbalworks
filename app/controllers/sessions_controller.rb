class SessionsController < ApplicationController
  def new
  end

  # def create
  #   user = User.find_by(email: params[:session][:email].downcase)
  #   if user && user.authenticate(params[:session][:password])
  #     session[:user_id] = user.id
  #     redirect_to root_path
  #   else
  #     render 'new'
  #   end
  # end

  # def create
  #   @user = User.find_by(email: params[:session][:email].downcase)

  #   respond_to do |format|
  #     if @user.save
  #       format.html { redirect_to @user, notice: 'User was successfully created.' }
  #       format.json { render :show, status: :created, location: @user }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @user.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end
  #

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      render json: user, except: [:password_digest, :created_at, :updated_at]
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  # private

  # def params
  #   params.require(:player).permit(:email)
  # end
end
