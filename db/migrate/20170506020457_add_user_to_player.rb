class AddUserToPlayer < ActiveRecord::Migration[5.1]
  def change
	add_reference :players, :user, index: true
  end
end
