import React, { Component } from 'react'
import Todo from './Todo'
import axios from 'axios'

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    // List all tasks from API

    async componentDidMount() {
        // const url = 'http://127.0.0.1:8000/api/tasks';
        // const res = await fetch(url).then(res => res.json());
        // this.setState({ todos: res });

        axios.get('http://127.0.0.1:8000/api/tasks/')
        .then(response => {
            this.setState({ todos: response.data });
        }).catch(function (error) {
            console.log(error);
        });

    }

    // Delete specified task {id}

    deleteItemHandler = (id) => {
        const items = this.state.todos.filter(item => {
            return item.id !== id
        });

        // const requestOptions = {
        //     method: 'DELETE'
        // };
        // fetch("http://127.0.0.1:8000/api/tasks/" + id, requestOptions).then((response) => {
        //     return response.json();
        // });
        // this.setState({ todos: items });

        axios.delete('http://127.0.0.1:8000/api/tasks/' + id).then(() => {
            console.log('Item deleted'); // Task removed
        }).then(response => {
            this.setState({ todos: items });
        }).catch(err => console.log(err));
    }

    // Create new task

    formInputChangeHandler = (e) => {
        this.setState({
            content: e.target.value,
            success: false
        })
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks/', {
            name: this.state.content,
        }).then(response => {
            this.setState({ todos: response.data });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className="center">Todo <strong>APP</strong></h3>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <div className="row">
                                <form onSubmit={this.formSubmitHandler}>
                                    <label htmlFor="addItem">Create new item</label>
                                    <input type="text" id="addItem" onChange={this.formInputChangeHandler} />
                                </form>
                            </div>
                            {this.state.loading ? <li className="collection-item">Loading...</li> : <Todo items={this.state.todos} deleteItem={this.deleteItemHandler} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
