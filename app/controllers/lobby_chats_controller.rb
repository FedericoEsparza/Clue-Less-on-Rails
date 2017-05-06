class LobbyChatsController < ApplicationController
  def show
    @lobby_messages = LobbyMessage.all
  end
end
