class AddHallwayToLocation < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :hallway, :boolean
    add_reference :locations, :location, foreign_key: true
  end
end
