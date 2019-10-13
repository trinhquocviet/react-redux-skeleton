import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import todosActions from 'actions/todos';

class Home extends React.Component {
  static propTypes = {
    todos:      PropTypes.array,
    totalTodos: PropTypes.number,
    // 
    doGetTodos: PropTypes.func,
  }

  static defaultProps = {
    todos:      [],
    totalTodos: 0,
    // 
    doGetTodos: () => {},
  }

  componentDidMount = () => {
    const { doGetTodos } = this.props;
    doGetTodos();
  }

  render() {
    return (
      <div>
        Todos: { this.props.totalTodos }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...pick(state.todos, ['todos', 'totalTodos']),
});

const mapDispatchToProps = dispatch => ({
  doGetTodos: () => dispatch(todosActions.get()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);