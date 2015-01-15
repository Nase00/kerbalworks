Rails.application.routes.draw do
  resources :ships

  root 'application#index'
  get    '/login'   => 'sessions#new'
  post   '/login'   => 'sessions#create'
  post '/logout'  => 'sessions#destroy'
  delete '/logout'  => 'sessions#destroy'
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
end
