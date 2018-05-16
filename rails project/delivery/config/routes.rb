Rails.application.routes.draw do
  get '/users/new', to: 'users#new', as: 'new_user'
 root 'static_pages#home'
 get '/users', to:'users#index', as: 'users'
 post '/users', to:'users#create'
 get '/users/:id', to: 'users#show', as: 'user'
 get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
 get '/customers', to: 'customers#index', as: 'customers'
 get '/signin', to: 'session#new', as: 'signin'
 post '/session', to: 'session#create', as: 'session'
 delete '/session/', to: 'session#destroy'
 get '/customers/new', to: 'customers#new', as: 'new_customer'
 get '/customers/:id', to: 'customers#show', as: 'customer'
 get '/customers/:id/edit', to: 'customers#edit', as: 'edit_customer'
 patch '/customers/:id', to: 'customers#update'
 post '/customers', to: 'customers#create'
 post '/orders', to:"orders#create", as: 'orders'
end
