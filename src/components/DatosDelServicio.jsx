import React from 'react'

const DatosDelServicio = () => {
    return (
        <div className='bg-light container rounded'>
            <h2>Datos del servicio</h2>
            <hr />


            <div className='p-2 w-100' style={{ height: '550px', width: '400px' }}>
                <form>
                    <div className="form-group mb-3" >
                        <label className='fw-bold'>Zona</label>
                        <input type="text" className="form-control" placeholder="Ingrese el nombre de la zona" />
                    </div>

                    <div className="form-row d-flex justify-content-evenly">
                        <div className="form-group col-8">
                            <label className='fw-bold'>Nombre de la ciudad</label>
                            <input type="text" className="form-control" placeholder="Ingrese el nombre de la ciudad" />
                        </div>
                        <div className="form-group col-3">
                            <label className='fw-bold'>Código postal</label>
                            <input type="text" className="form-control" placeholder="Ingrese el código postal" />
                        </div>
                    </div>

                    <div className="form-group col-5 mt-3">
                        <label className='fw-bold'>Modo de delimatación</label>
                        <input type="text" disabled className="form-control disabled" placeholder="Gecerca" value={'Geocerca'} />
                    </div>
                    <div className='align-self-end m-5'>

                        <button type="submit" className="btn btn-primary ">Guardar información</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default DatosDelServicio