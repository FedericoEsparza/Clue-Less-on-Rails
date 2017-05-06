class Player < ApplicationRecord
  belongs_to :game
  has_one :user
end
