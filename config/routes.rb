Rails.application.routes.draw do

  get '/api/login', to: 'sessions#create'


  namespace :api do
  	resources :users
    resources :podcasts
    resources :reviews
    resources :genres
    resources :friendships

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
