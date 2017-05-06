class Game < ApplicationRecord
  belongs_to :user, optional: true
  has_and_belongs_to_many :players 
  has_many :users, :through => :players

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
