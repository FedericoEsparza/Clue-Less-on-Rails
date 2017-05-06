class LobbyMessage < ApplicationRecord
  belongs_to :user
  after_create_commit { LobbyMessageBroadcastJob.perform_later(self) }
end
