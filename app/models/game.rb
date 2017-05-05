class Game < ApplicationRecord
  belongs_to :user

  def open?
    player_count < 6 
  end

  def add_player(user) 
    REDIS.sadd(self.id, user.email) 
  end 
 
  def remove_player(user) 
    REDIS.srem(self.id, user.email) 
  end 
 
  def player_count 
    get_players.count 
  end 
 
  def get_players 
    REDIS.smembers(self.id) 
  end 

  def start(players)
    #Check for winner
    while status do
      #rotate through players 
    end
  end
end
