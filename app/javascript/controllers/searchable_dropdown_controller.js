import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "search", "dropdown"]
  static values = {
    items: Array
  }

  connect() {
    this.itemsValue = [
      { id: 1, name: "東京都", category: "関東地方" },
      { id: 2, name: "横浜市", category: "神奈川県" },
      { id: 3, name: "大阪市", category: "大阪府" },
      { id: 4, name: "名古屋市", category: "愛知県" },
      { id: 5, name: "札幌市", category: "北海道" },
      { id: 6, name: "福岡市", category: "福岡県" },
      { id: 7, name: "京都市", category: "京都府" },
      { id: 8, name: "神戸市", category: "兵庫県" },
      { id: 9, name: "さいたま市", category: "埼玉県" },
      { id: 10, name: "広島市", category: "広島県" }
    ]
    this.filteredItems = this.itemsValue
  }

  search() {
    const query = this.searchTarget.value.toLowerCase()
    this.filteredItems = this.itemsValue.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    )
    this.render()
  }

  select(event) {
    const id = event.currentTarget.dataset.id
    const item = this.itemsValue.find(i => i.id === parseInt(id))
    this.inputTarget.value = item.name
    this.hideDropdown()
  }

  showDropdown() {
    this.dropdownTarget.classList.remove("hidden")
  }

  hideDropdown() {
    this.dropdownTarget.classList.add("hidden")
  }

  render() {
    const dropdownContent = this.filteredItems.map(item => `
      <div
        class="flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer rounded-md transition-colors duration-150 group"
        data-action="click->searchable-dropdown#select"
        data-id="${item.id}"
      >
        <div class="flex-1">
          <div class="font-medium group-hover:text-blue-600">${item.name}</div>
          <div class="text-sm text-gray-500 bg-gray-50 inline-block px-2 rounded">${item.category}</div>
        </div>
      </div>
    `).join("")

    this.dropdownTarget.innerHTML = dropdownContent
  }
}
