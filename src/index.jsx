import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/season-display';
import Spinner from './components/spinner';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // only initialize the state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  //  contructor funct above equivelant to... after goes through babel
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={ this.state.lat } />;
    }

    return <Spinner message="Finding your location..." />;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
