import React from 'react'

export default function Shop(props) {
    return (
        <div>
            <h1>Shop component</h1>
            <p>Shop component</p>
            <button onClick={props.add}>add</button>
        </div>
    )
}
