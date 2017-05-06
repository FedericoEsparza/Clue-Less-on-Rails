class PlayerBroadcastJob < ApplicationJob
  queue_as :default

  def perform(player, action)
    ActionCable.server.broadcast "game_channel_#{player.game.id}",
                                 message: render_player(player), action: action
  end

  private

  def render_player(player)
    PlayersController.render partial: 'players/player', locals: {player: player}
  end
end
