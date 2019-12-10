import React, { Component } from 'react'

export default class NewItem extends Component {
    state = {
        content: ''
    }

    formInputChangeHandler = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.createItem(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <label htmlFor="addItem">Create new item</label>
                    <input type="text" id="addItem" onChange={this.formInputChangeHandler} />
                </form>
            </div>
        )
    }
}
