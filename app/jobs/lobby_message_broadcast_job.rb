class LobbyMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(lobby_message)
    # Do something later
    ActionCable.server.broadcast 'lobby_chat_channel', render_lobby_message(lobby_message)
  end

  private

  def render_lobby_message(lobby_message)
    ApplicationController.renderer.render lobby_message
  end

end
