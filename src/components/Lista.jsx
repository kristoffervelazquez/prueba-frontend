import React from 'react'
import useServicios from '../hooks/useServicios'
import ItemList from './ItemList'


const Lista = ({ placeMap }) => {

    const { servicios, setEdicion } = useServicios();


    return (
        servicios ?
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Zona</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Codigo</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        servicios.map(service => (
                            <ItemList service={service} key={service.id} setEdicion={setEdicion} placeMap={placeMap} />
                        ))
                    }
                </tbody>
            </table>
            :
            <div>
                <p className='fw-bold text-center'>No se encontró ningun servicio</p>
            </div>
    )
}

export default Lista