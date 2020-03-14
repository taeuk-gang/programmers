console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.showLoading();
        api.fetchCats(keyword).then(({ data }) => this.setState(data)).then(() => this.hideLoading());
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.spinner = new Spinner({
      $target,
      data: {}
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  showLoading() {
    document.querySelector(`.spinner-wrap`).style.display = `flex`;
  }

  hideLoading() {
    document.querySelector(`.spinner-wrap`).style.display = `none`;
  }
}
