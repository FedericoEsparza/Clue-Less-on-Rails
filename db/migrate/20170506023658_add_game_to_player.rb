class AddGameToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :game
    add_reference :games, :player
  end
end
