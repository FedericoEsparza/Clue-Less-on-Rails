class CreateLobbyMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :lobby_messages do |t|
      t.text :content

      t.timestamps
    end
  end
end
