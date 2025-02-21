require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_url
    assert_response :success
  end

  test "should render searchable dropdown" do
    get root_url
    assert_select "[data-controller='searchable-dropdown']"
    assert_select "[data-searchable-dropdown-target='input']"
    assert_select "[data-searchable-dropdown-target='search']"
    assert_select "[data-searchable-dropdown-target='dropdown']"
  end
end
