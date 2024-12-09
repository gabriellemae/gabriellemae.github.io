class BgScroll {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
  }
}

// Init BgScroll
const el = document.querySelector('[data-bg-scroll]');
new BgScroll(el);