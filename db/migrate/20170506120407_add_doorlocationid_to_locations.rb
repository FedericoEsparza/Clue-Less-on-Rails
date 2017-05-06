class AddDoorlocationidToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :door_location_id, :integer
  end
end
