import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'This is text from the state',
      phText: "This is from the App's state",
      stuffFromInput: '',
      hasLoaded: false,
    };
  }

  componentDidMount(){
      this.setState({ hasLoaded: !this.state.hasLoaded });

  }

  onInputChange = (e) => {
    this.setState({ stuffFromInput: e.target.value });
  };

  changeLoaded = () => {
    // this.setState({ hasLoaded: !this.state.hasLoaded });

    //   this.setState({ hasLoaded: true })
  };

  render() {
    if (this.state.hasLoaded) {
      return (
        <>
          <h1>{this.props.text}</h1>
          <h1>{this.state.text}</h1>
          <input
            value={this.state.stuffFromInput}
            type="text"
            placeholder={this.state.phText}
            onChange={(e) => this.onInputChange(e)}
          />
           <button onClick={this.changeLoaded}>Click me</button>
        </>
      );
    } else {
      return (
        <>
          <h1>Loading...</h1>
          <button onClick={this.changeLoaded}>Click me</button>
        </>
      );
    }
  }

  //   const App = (props) => {
  //       return (
  //           <h1>
  //               {this.props.text}
  //           </h1>
  //       )
  //   }
}

export default App;
