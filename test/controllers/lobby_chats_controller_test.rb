require 'test_helper'

class LobbyChatsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get lobby_chats_show_url
    assert_response :success
  end

end
