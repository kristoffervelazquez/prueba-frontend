import React from 'react'
import Swal from 'sweetalert2';
import useServicios from '../hooks/useServicios';

const ItemList = ({ service, setEdicion }) => {
    const { eliminarServicio } = useServicios();
    const { id, nombre, ciudad, zona, codigo } = service;

    const handleClick = () => {
        // SE PASAN LOS DATOS AL FORMULARIO
        setEdicion(service);
    }

    const handleEliminarClick = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminarlo!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await eliminarServicio(id);
                Swal.fire(
                    'Eliminado!',
                    'Tu archivo ha sido eliminado.',
                    'success'
                )
                setEdicion();
            }
        })


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