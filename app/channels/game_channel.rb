# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class GameChannel < ApplicationCable::Channel
  def subscribed
    game = Game.find(params[:id])
    stream_from game
    game.add_user(current_user)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    game = Game.find(params[:id])
    game.remove_user(current_user) 
  end

  def make_move(data)
    Game.make_move(current_user, data)
  end
end
