import React from 'react'

const Todos = ({ items, deleteItem }) => {

    const style = {
        float: 'right',
        color: 'red'
    }

    const list = items.length ? (
        items.map(item => {
            return (
                <li className="collection-item" key={item.id}>
                    <span>{item.name}</span>
                    <span style={style} onClick={() => deleteItem(item.id)}>Remove</span>
                </li>
            )
        })
    ) : (
            <p className="center">No items</p>
        )

    return (
        <div className="collection">
            {list}
        </div>
    )
}

export default Todos
