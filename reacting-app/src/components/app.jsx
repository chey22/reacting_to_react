import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'this!',
      inputText: 'type something',
      hasLoaded: false
    };
  }

  componentDidMount() {
      this.setState({ hasLoaded: true })
  }

  handleOnChange(e) {
    this.setState({ inputText: e.target.value });
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
  }

  handleOnClick() {
    this.setState({ hasLoaded: !this.state.hasLoaded });
    console.log(this.state.hasLoaded);
  }

  render() {
    if (this.state.hasLoaded === true) {
      return (
        <React.Fragment>
          <h1>
            {this.props.message} {this.state.text}
          </h1>
          <input
            placeholder={this.state.inputText}
            onChange={e => this.handleOnChange(e)}
          />
          <button onClick={() => this.handleOnClick()}>Click Here</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
          <button onClick={() => this.handleOnClick()}>Click Here</button>
        </React.Fragment>
      );
    }
  }
}
export default App;
