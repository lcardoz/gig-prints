Rails.application.routes.draw do

  # are the routes for messages & chats needed/correct?
  resources :messages, only: [:index, :show, :create]
  resources :chats, only: [:index, :show, :create]

  resources :posters, except: [:show]
  resources :designers, only: [:index, :show, :create, :update]
  resources :bands, only: [:index, :show, :create, :update]

  post '/signup/band', to: "bands#create"
  post '/signup/designer', to: "designers#create"

  post '/login/band', to: "sessions#create_band_session"
  post '/login/designer', to: "sessions#create_designer_session"

  get '/authorized/band', to: "bands#show"
  get '/authorized/designer', to: "designers#show"

  delete '/logout', to: "sessions#destroy"


  # get '/bands/:id', to: 'bands#show_different_band'
  # get '/designers/:id', to: 'designers#show_different_designer'

end
