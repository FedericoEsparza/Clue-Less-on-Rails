class AddReferencesToGame < ActiveRecord::Migration[5.1]
  def change
    add_reference :games, :location, foreign_key: true
  end
end
