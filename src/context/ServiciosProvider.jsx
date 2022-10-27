import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import clienteAxios from '../config/axios';

const initialState = {
    id: 0,
    nombre: '',
    ciudad: '',
    zona: '',
    codigo: 0,
    geocerca: []
}

const ServiciosContext = createContext();

export const ServiciosProvider = ({ children }) => {

    const [servicios, setServicios] = useState([]);
    const [servicioActivo, setServicioActivo] = useState(initialState);


    useEffect(() => {
        obtenerServicios();
    }, []);


    const obtenerServicios = async () => {
        try {
            const { data } = await clienteAxios.get('/');
            setServicios(data.data);

        } catch (error) {
            console.error(error);
        }
    }

    const guardarServicio = async (infoServicio) => {
        try {
            const { data } = await clienteAxios.post('/', infoServicio);
            await obtenerServicios();
            console.log(data);
            // setServicios([...servicios, data.data])


        } catch (error) {
            console.error(error);
        }
    }


    const actualizarServicio = async (infoServicio, id) => {
        try {
            const { data } = await clienteAxios.patch(`/${id}`, infoServicio);
            await obtenerServicios();
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }

    const eliminarServicio = async (id) => {
        try {
            const { data } = await clienteAxios.delete(`/${id}`);
            await obtenerServicios();
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }


    const setEdicion = (servicio = initialState) => {
        setServicioActivo(servicio);
    }

    const buscarPorNombre = async (nombre) => {
        try {
            const { data } = await clienteAxios.get('/filtrar', {
                params: { nombre: nombre }
            })

            setServicios(data.data);

            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }




    return (
        <ServiciosContext.Provider
            value={{ servicios, servicioActivo, setEdicion, guardarServicio, actualizarServicio, eliminarServicio, buscarPorNombre }}
        >
            {children}
        </ServiciosContext.Provider>
    )
}

export default ServiciosContext;