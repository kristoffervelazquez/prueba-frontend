
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import useMap from '../hooks/useMap';
import useServicios from '../hooks/useServicios';
import BaseDelServicio from './BaseDelServicio'
import DatosDelServicio from './DatosDelServicio'
import Lista from './Lista';



const MainContainer = () => {
    const { buscarPorNombre } = useServicios();
    const [query, setQuery] = useState('');
    const { initMap, getCoords, placeMap, coords } = useMap();

    useEffect(() => {
        initMap();
    }, []);



    const onChangeText = (e) => {
        buscarPorNombre(e.target.value);
    }


    return (
        <div className="">
            <div className="row">
                <div className="col-6 ">
                    <DatosDelServicio />
                </div>
                <div className="col-6">
                    <BaseDelServicio getCoords={getCoords} savedCoords={coords} placeMap={placeMap} />
                </div>
            </div>
            <div className='bg-light rounded container mt-5 p-2'>

                <div className="container-fluid d-flex p-2">
                    <h2 className='text-center'>Lista de servicios</h2>

                    <form className="d-flex w-50 ms-auto" role="search">
                        <input className="form-control me-2" type="search" value={query} onChange={(e) => { setQuery(e.target.value) }} onKeyUp={onChangeText} placeholder="Inserta nombre de servicio" aria-label="Search" />
                        {/* <button className="btn btn-outline-primary" type="submit">Buscar</button> */}
                    </form>

                </div>
                <hr />

                <Lista placeMap={placeMap} />
            </div>
            <div style={{ height: 100 }}>

            </div>

        </div>
    )
}

export default MainContainer