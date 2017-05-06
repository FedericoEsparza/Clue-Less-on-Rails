class Player < ApplicationRecord
  belongs_to :game
  has_one :user
  has_one :location

  def move_locations
    self.location.available_moves
  end

end
