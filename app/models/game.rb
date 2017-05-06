class Game < ApplicationRecord
  belongs_to :user, optional: true
  has_and_belongs_to_many :players 
  has_many :users, :through => :players

  def open?
    open = false
    players = self.players
    players.each do |p|
      if p.user.nil?
        open = true
      end
    end
    open
  end

  def add_user(user)
    added = user.players.where(game_id: self.id)
    players = self.players
    players.each do |p|
      if !added & p.user.nil?
        p.user = user
	p.save
	added = true
      end
    end
  end

  def remove_user(user)
    self.players.where(user: user).firsrt.user=nil
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
