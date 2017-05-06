class Game < ApplicationRecord
  belongs_to :user
  has_many :users, :through => :players
  has_and_belongs_to_many :players 

  def open?
    self.players.count < 6 
  end

  def start(players)
    #Check for winner
    while status do
      #rotate through players 
    end
  end

  def self.make_move(current_user, data)
    
  end
end
