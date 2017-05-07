Rails.application.routes.draw do
  get 'game-front-end', to: 'game_areas#show'

  get 'lobby', to: 'lobby_chats#show'

  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }

  root to: 'static_pages#home'

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
