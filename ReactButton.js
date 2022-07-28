"use strict";

const e = React.createElement;

class ReactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return e(
      "button",
      {
        onClick: () =>
          this.setState((prevState) => ({
            count: prevState.count + 1,
          })),
      },
      `Times Clicked : ${this.state.count}`
    );
  }
}

const domContainer = document.querySelector("#button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(ReactButton));
