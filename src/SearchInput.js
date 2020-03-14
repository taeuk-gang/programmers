const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onSearchRandom }) {
    const $wrapDiv = document.createElement(`div`);
    const $searchInput = document.createElement("input");
    const $randomButton = document.createElement("button");

    this.$wrapDiv = $wrapDiv;

    this.$searchInput = $searchInput;    
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.type = "search";
    this.$searchInput.autofocus = "true";
    
    this.$randomButton = $randomButton;    
    this.$randomButton.textContent = `랜덤`;   

    $wrapDiv.className = `search-wrap`;
    $wrapDiv.appendChild($searchInput);
    $wrapDiv.appendChild($randomButton);

    $searchInput.className = "SearchInput";
    

    $randomButton.className = "random-button";
    $target.appendChild($wrapDiv);



    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {        
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", e => {
      const empty = () => e.target.value = ``;

      empty();
    });

    $randomButton.addEventListener(`click`, () => {
      onSearchRandom();
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
