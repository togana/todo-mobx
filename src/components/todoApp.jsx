import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTool from 'mobx-react-devtools';

// import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'initial value',
    };
    this.changeText = this.changeText.bind(this);
  }
  componentDidMount() {
  }

  changeText(e) {
    this.setState({ textValue: e.target.value });
  }

  render() {
    // const { viewStore } = this.props;
    return (
      <div>
        <DevTool />
        <p>{this.state.textValue}</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
}

TodoApp.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
};

module.exports = observer(TodoApp);
