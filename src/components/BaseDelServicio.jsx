import React from 'react'
import useServicios from '../hooks/useServicios';


const BaseDelServicio = ({ getCoords, savedCoords }) => {

    const { setEdicion, servicioActivo } = useServicios();

    const handleClick = () => {
        getCoords();
        setEdicion({ ...servicioActivo, geocerca: savedCoords })
    }

    return (
        <>
            <div className='bg-light rounded shadow'>
                <div className='container p-3 justify-content-center'>
                    <p className='fw-bold text-center'>Base del servicio</p>
                    <hr />
                    <div id="map" className='container-fluid rounded' style={{ height: '300px', width: '500px' }}>
                    </div>
                </div>
            </div >

            <div className='bg-light rounded shadow'>
                <div className='container mt-3 p-3 '>
                    <button onClick={handleClick} className='btn btn-primary w-100 rounded-pill my-2'>Aplicar Geocerca</button>
                    {/* <button onClick={placeMap} className='btn btn-primary w-100 rounded-pill'>Cargar Servicio</button> */}
                </div>
            </div >
        </>
    )
}

export default BaseDelServicio