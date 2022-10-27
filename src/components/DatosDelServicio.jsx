import React from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import useServicios from '../hooks/useServicios'


const DatosDelServicio = () => {

    const { servicioActivo, setEdicion, guardarServicio, actualizarServicio } = useServicios();
    const [formValues, handleInputChange, resetForm, setNewFormValues] = useForm(servicioActivo);

    const { id, nombre, ciudad, zona, codigo, geocerca } = formValues;


    useEffect(() => {
        setNewFormValues(servicioActivo);
    }, [servicioActivo]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formValues).some(x => (x === ''))) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Valores vacios en el formulario!',
                
            })
            console.log('Error: Valores vacios en el formulario')
            return;
        }

        if (geocerca.length <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Geocerca no establecida!',
            })
            console.log('Error: Geocerca no establecida');
            return;
        }

        if (id === 0) {
            // Se agrega un nuevo servicio
            await guardarServicio({ nombre, ciudad, zona, codigo, geocerca });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se agregó el documento con éxito',
                showConfirmButton: false,
                timer: 1500
            })
            //Limpiar formulario
            resetForm();
            setEdicion();

        } else {
            // Se actualiza un registro

            Swal.fire({
                title: 'Quiere guardar los cambios?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                denyButtonText: `No guardar`,
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    await actualizarServicio({ nombre, ciudad, zona, codigo, geocerca }, id);
                    Swal.fire('Cambios guardados con éxito!', '', 'success')
                    //Limpiar formulario
                    resetForm();
                    setEdicion();
                } else if (result.isDenied) {
                    Swal.fire('Los cambios no se guardaron', '', 'info')
                }
            })

        }




    }

    return (
        <div className='bg-light container rounded shadow '>
            <div className='p-2'>
                <p className='fw-bold text-center p-1'>Datos del servicio</p>
                <hr />
            </div>


            <div className='p-2 w-100' style={{ height: '420px', width: '400px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3" >
                        <label className='fw-bold'>Nombre del servicio</label>
                        <input value={nombre} onChange={handleInputChange} name="nombre" type="text" className="form-control" placeholder="Ingrese el nombre del servicio" autoComplete='off' />
                    </div>
                    <div className="form-group mb-3" >
                        <label className='fw-bold'>Zona</label>
                        <input value={zona} onChange={handleInputChange} name="zona" type="text" className="form-control" placeholder="Ingrese el nombre de la zona" />
                    </div>

                    <div className="form-row d-flex justify-content-between">
                        <div className="form-group col-8">
                            <label className='fw-bold'>Nombre de la ciudad</label>
                            <input value={ciudad} onChange={handleInputChange} name="ciudad" type="text" className="form-control" placeholder="Ingrese el nombre de la ciudad" />
                        </div>
                        <div className="form-group col-3">
                            <label className='fw-bold'>Código postal</label>
                            <input value={codigo} onChange={handleInputChange} name="codigo" type="text" className="form-control" placeholder="Ingrese el código postal" />
                        </div>
                    </div>

                    <div className="form-group col-5 mt-3">
                        <label className='fw-bold'>Coordenadas de delimitación</label>
                        <input type="text" disabled className="form-control disabled" placeholder="Gecerca" value={JSON.stringify(geocerca)} onChange={handleInputChange} name="geocerca" />
                    </div>
                    <div className='mt-5'>
                        <button type="submit" className="btn btn-primary rounded w-100 ">Guardar información</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default DatosDelServicio