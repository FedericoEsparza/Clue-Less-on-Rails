class Player < ApplicationRecord
  belongs_to :game
  has_one :user
  has_one :location
end
