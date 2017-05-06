class LobbyChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "lobby_chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_lobby_message (data)
    LobbyMessage.create content: data['lobby_message'], user: current_user
  end
end
