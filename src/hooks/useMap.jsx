import { useEffect } from 'react';
import { useState } from 'react';
import useServicios from './useServicios';

let map;
let _Mypolygon = new google.maps.Polygon({
    paths: [
        {
            lat: 118.774,
            lng: -80.19
        },
        {
            lat: 38.566,
            lng: 46.118
        },
        {
            lat: 32.321,
            lng: -34.757
        }
    ],
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});;
let savedCoords = [];

const useMap = () => {

    const { servicioActivo } = useServicios();
    // Coordenas del poligono dibujado actual
    const [coords, setCoords] = useState([]);

    useEffect(() => {
        placeMap()
    }, [servicioActivo])


    const initMap = () => {
        map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: { lat: 31.899783920174098, lng: -113.236875 },
                zoom: 5,
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

    const getCoords = async () => {
        savedCoords = [];
        // Se pasan a un arreglo para hacer el cambio de dato a objeto
        coords.forEach(coord => {
            savedCoords.push(coord.toJSON());
        })

        setCoords(savedCoords);

        placeMap(savedCoords);
    }

    const placeMap = (coordenadas = servicioActivo.geocerca) => {
        // Se limpia el poligono anterior
        limpiarMapa();



        const mapCoords = new google.maps.Polygon({
            paths: coordenadas,
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        });
        mapCoords.setMap(map);

        // El poligono anterior se desecha y el _MyPolign es igual al poligono actual para poder limpiarlo 
        // en el siguiente dibujado
        _Mypolygon = mapCoords;
    }

    const limpiarMapa = () => {
        _Mypolygon.setMap(null);

    }



    return {
        initMap, placeMap, getCoords, coords
    }

}

export default useMap