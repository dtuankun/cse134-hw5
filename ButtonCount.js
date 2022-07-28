class ButtonCount extends HTMLElement {
  constructor() {
    super();

    this.count = 0;
    this.render(this.count);

    this.addEventListener("click", () => {
      this.count++;
      this.render(this.count);
    });
  }

  render(count) {
    this.innerHTML = `<button>Times Clicked: ${count}</button>`;
  }
}

customElements.define("button-count", ButtonCount);
