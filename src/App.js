import React, { Component } from 'react'
import Todos from './Todos/Todos'
import AddTask from './Todos/AddTodo'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'buy bread'},
      {id: 3, content: 'buy honey'},
      {id: 4, content: 'buy cacao'},
    ]
  }

  createItemHandler = (item) => {
    item.id = Math.random();
    let items = [...this.state.todos, item];
    this.setState({todos: items});
  }

  deleteItemsHandler = (id) => {
    const items = this.state.todos.filter(item => {
      return item.id !== id
    });
    items.splice(id, 0);
    this.setState({todos: items});
  }

  render() {
    return (
      <div className="container">
        <h3 className="center">Todo <strong>APP</strong></h3>
        <div className="row">
          <div className="col s6 offset-s3">
          <div className="row">
          <AddTask createItem={this.createItemHandler} />
        </div>
        <Todos items={this.state.todos} deleteItem={this.deleteItemsHandler} />
          </div>
        </div>
      </div>
    )
  }
}
