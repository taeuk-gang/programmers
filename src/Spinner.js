class Spinner {
  constructor({ $target }) {
    const $spinnerDiv = document.createElement("div");
    this.$spinnerDiv = $spinnerDiv;
    $spinnerDiv.innerHTML = `    
    <span class="spinner-border"></span>
    <p>검색 중...</p>
    `;
    $spinnerDiv.className = "spinner-wrap";
    $target.appendChild($spinnerDiv);
  }
  render() {}
}
