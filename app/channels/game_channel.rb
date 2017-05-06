# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class GameChannel < ApplicationCable::Channel
  def subscribed
    game = Game.find(params['game_id'])
    game.add_user(current_user)
    stream_from "game_channel_#{params['game_id']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    Rails.logger.info "PARAMS-----------------#{params}"
    game = Game.find(params['id'])
    if !game.nil?
      game.remove_user(current_user)
    end
  end

  def make_move(data)
    Game.make_move(current_user, data)
  end
end
