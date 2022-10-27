import React from 'react'
import useServicios from '../hooks/useServicios';

const ItemList = ({ service, setEdicion }) => {
    const { eliminarServicio } = useServicios();
    const { id, nombre, ciudad, zona, codigo } = service;

    const handleClick = () => {
        // SE PASAN LOS DATOS AL FORMULARIO
        setEdicion(service);
    }

    const handleEliminarClick = async () => {
        const confirmacion = confirm('Quieres eliminar este servicio?')

        if (confirmacion) {
            await eliminarServicio(id);
        }
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{nombre}</td>
            <td>{zona}</td>
            <td>{ciudad}</td>
            <td>{codigo}</td>
            <td>
                <button className='btn btn-primary w-100' onClick={handleClick}>Editar</button>
            </td>
            <td>
                <button onClick={handleEliminarClick} className='btn btn-danger w-100'>Eliminar</button>
            </td>

        </tr>
    )
}

export default ItemList