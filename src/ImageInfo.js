class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();

    document.querySelector(`.ImageInfo`).addEventListener(`click`, this.clickModalWrap.bind(this));
    document.querySelector(`.ImageInfo .close`).addEventListener(`click`, this.clickX.bind(this));

    document.addEventListener(`keydown`, this.keydownESC.bind(this));
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
  
  // # 모달 클릭시
  clickModalWrap(event) {
    const target = event.target;
		if (!target.classList.contains(`ImageInfo`)) {
			return;
    }
    
    this.hide();
  }

  // # X 클릭시
  clickX(event) {
    const target = event.target;
		if (!target.classList.contains(`close`)) {
			return;
    }
    
    this.hide();
  }
  
  // # ESC 입력시
  keydownESC(event) {
    const isEsc = () => event.key === `Escape`;

    if (isEsc()) {
      this.hide();
    }
  }

  // # custom function
  hide() {
    this.$imageInfo.style.display = `none`;
  }
}
