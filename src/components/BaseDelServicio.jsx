import React from 'react'

const BaseDelServicio = ({getCoords, placeMap}) => {


    return (
        <>
            <div className='bg-light rounded'>
                <div className='container p-3 justify-content-center'>
                    <h2>Base del servicio</h2>
                    <hr />
                    <div id="map" className='container rounded' style={{ height: '300px', width: '500px' }}>
                    </div>
                </div>
            </div >

            <div className='bg-light rounded'>
                <div className='container mt-5 p-3 '>
                    <button onClick={getCoords} className='btn btn-primary w-100 rounded-pill mb-3'>Guardar Servicio</button>
                    <button onClick={placeMap} className='btn btn-primary w-100 rounded-pill'>Cargar Servicio</button>
                </div>
            </div >
        </>
    )
}

export default BaseDelServicio