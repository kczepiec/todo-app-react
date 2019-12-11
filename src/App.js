import React, { Component } from 'react'
import TodosList from './Todos/TodosList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodosList/>
      </div>
    )
  }
}
