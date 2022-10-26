import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BaseDelServicio from './BaseDelServicio'
import DatosDelServicio from './DatosDelServicio'
import Lista from './Lista';

let map;
let _Mypolygon;
let savedCoords = [];

const MainContainer = () => {

    // Coordenas del poligono dibujado actual
    const [coords, setCoords] = useState([]);

    const initMap = () => {
        map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: { lat: 31.899783920174098, lng: -113.236875 },
                zoom: 2,
            }
        );

        const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                    google.maps.drawing.OverlayType.POLYGON
                ],
            },
            markerOptions: {
                clickable: false,
                visible: false
            },
        });


        google.maps.event.addListener(drawingManager, 'overlaycomplete', function (polygon) {
            if (_Mypolygon) {
                limpiarMapa();
            }
            _Mypolygon = polygon.overlay;
            setCoords([]);
            setCoords(polygon.overlay.getPath().getArray());
        });

        drawingManager.setMap(map);

    }

    const getCoords = () => {
        savedCoords = [];
        // Se pasan a un arreglo para hacer el cambio de dato a objeto
        coords.forEach(coord => {
            savedCoords.push(coord.toJSON());
        })

        placeMap();

    }

    const placeMap = () => {
        // Se limpia el poligono anterior
        limpiarMapa();


        const mapCoords = new google.maps.Polygon({
            paths: savedCoords,
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        });

        // El poligono anterior se desecha y el _MyPolign es igual al poligono actual para poder limpiarlo 
        // en el siguiente dibujado
        _Mypolygon = mapCoords;


        mapCoords.setMap(map);
        console.log(savedCoords);
    }

    const limpiarMapa = () => {
        _Mypolygon.setMap(null);

    }

    // Todo: Mandar a guardar a la base de datos la informacion y borrar el mapa al guardar


    useEffect(() => {
        initMap();
    }, [])




    return (
        <div className="">
            <div className="row">
                <div className="col">
                    <DatosDelServicio />
                </div>
                <div className="col">
                    <BaseDelServicio getCoords={getCoords} placeMap={placeMap} limpiarMapa={limpiarMapa} />
                </div>
            </div>
            <div className='bg-light rounded container mt-5 p-2'>
                <h1 className='text-center'>Lista de servicios</h1>
                <hr />
                <Lista />
            </div>
            <div style={{height: 100}}>

            </div>

        </div>
    )
}

export default MainContainer