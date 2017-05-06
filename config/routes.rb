Rails.application.routes.draw do
  resources :players
  resources :games
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }

  root to: 'static_pages#home'

  get 'c_user' => "user#c_user"
  
  mount ActionCable.server => "/cable"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
