class PlayerBroadcastJob < ApplicationJob
  queue_as :default

  def perform(player)
    ActionCable.server.broadcast "games_#{player.game.id}_channel",
                                 message: render_player(player), action: "new_player"
  end

  private

  def render_player(player)
    PlayerController.render partial: 'players/player'
  end
end
