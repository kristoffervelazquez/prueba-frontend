import React from 'react'

const ItemList = ({ id, nombre, ciudad, zona, codigo, geocerca }) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{nombre}</td>
            <td>{zona}</td>
            <td>{ciudad}</td>
            <td>{codigo}</td>
        </tr>
    )
}

export default ItemList