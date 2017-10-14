require 'test_helper'

class InvitationsControllerTest < ActionDispatch::IntegrationTest
  test "should get cards" do
    get invitations_cards_url
    assert_response :success
  end

  test "should get envelopes" do
    get invitations_envelopes_url
    assert_response :success
  end

end
