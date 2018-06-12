Rails.application.routes.draw do
  root 'static_pages#home'
  get '/auth/facebook/callback' => 'sessions#new'

  get '/users/new', to: 'users#new', as: 'new_user'
 root 'static_pages#home'
 get '/users', to:'users#index', as: 'users'
 post '/users', to:'users#create'
 get '/users/:id', to: 'users#show', as: 'user'
 get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
 get '/meals', to: 'meals#index'
 get '/signin', to: 'sessions#new', as: 'signin'
 post '/sessions', to: 'sessions#create', as: 'sessions'
 delete '/sessions/', to: 'sessions#destroy'
 get '/meals/new', to: 'meals#new', as: 'new_meal'
 get '/meals/:id', to: 'meals#show', as: 'meal'
 get '/meals/:id/edit', to: 'meals#edit', as: 'edit_meal'
 patch '/meals/:id', to: 'meals#update'
 post '/meals', to: 'meals#create'
 get '/orders/new', to: 'orders#new', as: 'new_order'
 post '/orders', to:"orders#create", as: 'orders'
 get '/orders/:id', to:"orders#show", as: 'order'
 get '/orders/:id/edit', to: 'orders#edit', as: 'edit_order'
get 'meals/:meal_id/orders/new', to: 'orders#new', as: 'new_meal_order'
post '/meals/:id/orders', to: 'orders#create'
 patch '/orders/:id', to: 'orders#update'

 resources :meals do
  resources :orders
  end 

end
