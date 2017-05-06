class Location < ApplicationRecord
  belongs_to :game
  has_many :players
  
  has_many :doors, :class_name => "Location", :foreign_key => "door_location_id"

  def open?
    !self.hallway || self.players.blank?
  end

  def available_moves
    moves = Array.new
    self.doors.each do |d|
      if d.open?
        moves << d
      end
    end
    moves
  end
end
