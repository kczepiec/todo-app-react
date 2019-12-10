import React from 'react'

const Todos = ({ items, deleteItem }) => {

    const list = items.length ? (
        items.map(item => {
            return (
                <li className="collection-item" key={item.id}>
                    <span onClick={() => deleteItem(item.id)}>{item.content}</span>
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
