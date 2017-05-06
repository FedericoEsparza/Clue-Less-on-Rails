class AddReferencesToPlayer < ActiveRecord::Migration[5.1]
  def change
    add_reference :players, :location, foreign_key: true
  end
end
