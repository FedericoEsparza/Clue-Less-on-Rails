class AddReferencesToLocation < ActiveRecord::Migration[5.1]
  def change
    add_reference :locations, :game, foreign_key: true
  end
end
