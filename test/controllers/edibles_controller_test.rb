require 'test_helper'

class EdiblesControllerTest < ActionDispatch::IntegrationTest
  test "should get tea" do
    get edibles_tea_url
    assert_response :success
  end

  test "should get jam" do
    get edibles_jam_url
    assert_response :success
  end

  test "should get honey" do
    get edibles_honey_url
    assert_response :success
  end

  test "should get cakes" do
    get edibles_cakes_url
    assert_response :success
  end

  test "should get coffee" do
    get edibles_coffee_url
    assert_response :success
  end

  test "should get macarons" do
    get edibles_macarons_url
    assert_response :success
  end

  test "should get cookies" do
    get edibles_cookies_url
    assert_response :success
  end

end
