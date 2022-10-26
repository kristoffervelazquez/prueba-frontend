import React from 'react'
import ItemList from './ItemList'

const arr = [
    {
        "id": 1,
        "nombre": "Zona hotelera",
        "ciudad": "Merida",
        "zona": "32",
        "codigo": 1000,
        "geocerca": false
    },
    {
        "id": 2,
        "nombre": "Zona hotelera",
        "ciudad": "Cancun",
        "zona": "1",
        "codigo": 1000,
        "geocerca": false
    },
    {
        "id": 3,
        "nombre": "Zona hotelera",
        "ciudad": "Hermosillo",
        "zona": "0",
        "codigo": 8000,
        "geocerca": true
    },
    {
        "id": 6,
        "nombre": "Puerto Kino",
        "ciudad": "Bahia de Kino",
        "zona": "1",
        "codigo": 12312312,
        "geocerca": true
    }
]

const Lista = () => {
    return (
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Zona</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Codigo</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map(usuario => (
                        <ItemList {...usuario} />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Lista