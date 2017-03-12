import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTool from 'mobx-react-devtools';

// import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

class TodoApp extends Component {
  componentDidMount() {
  }

  render() {
    // const { viewStore } = this.props;
    return (
      <div>
        <DevTool />
      </div>
    );
  }
}

TodoApp.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
};

module.exports = observer(TodoApp);
