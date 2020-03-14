const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;    
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.type = "search";
    this.$searchInput.autofocus = "true";

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", e => {
      const empty = () => e.target.value = ``;

      empty();
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
