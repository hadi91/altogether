require 'test_helper'

class NonEdiblesControllerTest < ActionDispatch::IntegrationTest
  test "should get shades" do
    get non_edibles_shades_url
    assert_response :success
  end

  test "should get fans" do
    get non_edibles_fans_url
    assert_response :success
  end

  test "should get candle" do
    get non_edibles_candle_url
    assert_response :success
  end

end
