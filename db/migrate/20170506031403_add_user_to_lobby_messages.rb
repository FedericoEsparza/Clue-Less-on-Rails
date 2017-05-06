class AddUserToLobbyMessages < ActiveRecord::Migration[5.1]
  def change
    add_reference :lobby_messages, :user, foreign_key: true
  end
end
