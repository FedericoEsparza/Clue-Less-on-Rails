require 'test_helper'

class GameAreasControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get game_areas_show_url
    assert_response :success
  end

end
