import React, { Component } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";

class Home extends Component {
  //   constructor() {
  //     super();
  //   }
  state = {
    count: 0,
  };
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("did update");
  }
  componentWillUnmount() {}

  increaseCount = function (newCount) {
    this.setState({
      count: newCount,
    });
  };

  render() {
    // this.props
    // this.state
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src="/imgs/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.increaseCount(this.state.count + 1)}>count is {this.state.count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </>
    );
  }
}

export default Home;
