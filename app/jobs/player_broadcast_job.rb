class PlayerBroadcastJob < ApplicationJob
  queue_as :default

  def perform(player)
    ActionCable.server.broadcast "games_#{player.game.id}_channel",
                                 message: render_player(player)
  end

  private

  def render_player(message)
    PlayerController.render partial: 'players/player', locals: {player: player}
  end
end
