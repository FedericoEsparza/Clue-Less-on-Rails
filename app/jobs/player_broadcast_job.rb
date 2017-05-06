class PlayerBroadcastJob < ApplicationJob
  queue_as :default

  def perform(player)
    Rails.logger.info "--------------BROADCASTING-------#{player.game.id}--------"
    ActionCable.server.broadcast "game_channel_#{player.game.id}",
                                 message: render_player(player), action: "new_player"
  end

  private

  def render_player(player)
    PlayerController.render partial: 'players/player'
  end
end
