import React, { Component } from "react";
import reactLogo from "../assets/react.svg";
// import "../App.css";

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
      <section className="max-w-320 mx-0 my-auto p-8 text-center flex flex-col bg-black text-white">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img
              src="/imgs/vite.svg"
              className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_rgb(100,108,255)] logo"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafb] motion-safe:animate-logo-spin"
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="p-8">
          <button onClick={() => this.increaseCount(this.state.count + 1)}>count is {this.state.count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-[#888]">Click on the Vite and React logos to learn more</p>
      </section>
    );
  }
}

export default Home;
