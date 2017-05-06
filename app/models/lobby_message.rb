class LobbyMessage < ApplicationRecord
  after_create_commit { LobbyMessageBroadcastJob.perform_later(self) }
end
