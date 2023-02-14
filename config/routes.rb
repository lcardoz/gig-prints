Rails.application.routes.draw do
  resources :posters, except: [:show]
  resources :designers, only: [:index, :create, :update]
  resources :bands, only: [:index, :create, :update]

  get "/bands/:id", to: 'bands#show_different_band'
  get "/designers/:id", to: 'designers#show_different_designer'

  post '/signup/band', to: "bands#create"
  post '/signup/designer', to: "designers#create"

  post '/login/band', to: "sessions#create_band_session"
  post '/login/designer', to: "sessions#create_designer_session"

  get '/authorized/band', to: "bands#show"
  get '/authorized/designer', to: "designers#show"

  delete '/logout', to: "sessions#destroy"

end
