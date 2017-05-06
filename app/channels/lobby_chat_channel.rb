class LobbyChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "lobby_chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_lobby_message (data)
    ActionCable.server.broadcast 'lobby_chat_channel', data['lobby_message']
  end
end
