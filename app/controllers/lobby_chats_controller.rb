class LobbyChatsController < ApplicationController
  before_action :authenticate_user!
  
  def show
    @lobby_messages = LobbyMessage.all
  end
end
