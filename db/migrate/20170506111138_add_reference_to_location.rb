class AddReferenceToLocation < ActiveRecord::Migration[5.1]
  def change
    add_reference :locations, :player, foreign_key: true
  end
end
