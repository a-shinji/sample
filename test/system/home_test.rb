require "application_system_test_case"

class HomeTest < ApplicationSystemTestCase
  test "can search and select items" do
    visit root_path
    
    assert_selector "input[placeholder='項目を選択してください']"
    
    find("input[placeholder='項目を選択してください']").click
    assert_selector "input[placeholder='検索...']"
    
    fill_in "検索...", with: "東京"
    assert_text "東京都"
    
    find('div.font-medium', text: '東京都').click
    assert_field "選択された項目", with: "東京都"
  end
end
