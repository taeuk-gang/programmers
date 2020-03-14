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
        api.fetchCats(keyword)
        .then(({ data }) => this.setState(data))
        .catch(err => {
          const modalMessage = document.createElement(`modal-message`);
          modalMessage.text = `데이터를 불러오지 못했습니다.`          
          
          document.querySelector(`#App`).appendChild(modalMessage);
          console.error(err);
        }).finally(() => {
          this.hideLoading();
        });
      },
      onSearchRandom: () => {
        this.showLoading();
        api.fetchRandom()
        .then(({ data }) => this.setState(data))
        .catch(err => {
          const modalMessage = document.createElement(`modal-message`);
          modalMessage.text = `데이터를 불러오지 못했습니다.`
          this.hideLoading();
          
          document.querySelector(`#App`).appendChild(modalMessage);
          console.error(err);
        }).finally(() => {
          this.hideLoading();
        });
      },
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
    const modalMessage = document.createElement(`modal-message`);
    
    modalMessage.text = `검색 결과가 없습니다.`   
    document.querySelector(`.SearchResult`).innerHTML = ``;

    this.data = nextData;   
    this.searchResult.setState(nextData);

    if (this.data === undefined || this.data.length === 0) {
      document.querySelector(`#App`).appendChild(modalMessage);
    };
  }

  showLoading() {
    document.querySelector(`.spinner-wrap`).style.display = `flex`;
  }

  hideLoading() {
    document.querySelector(`.spinner-wrap`).style.display = `none`;
  }
}
