import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {
  onReset = () => {
    this.props.appState.resetTimer();
  }
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
        <DevTools />
      </div>
    );
  }
}

App.propTypes = {
  appState: PropTypes.object.isRequired,
};
