import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.css'
import "leaflet/dist/leaflet.css";


//, 


export function Mapa({ dadosmapa }) {
    const [center, setCenter] = useState({ lat: -11.2135241, lng: 17.8770032 });
    const [positionAlojamento, setPositionAlojamento] = useState({ lat: -11.2135241, lng: 17.8770032 })
    useEffect(() => {
        if (localStorage.hasOwnProperty("latitude") && localStorage.hasOwnProperty("longitude")) {

            console.log('ola1')
            const lati = localStorage.getItem("latitude")
            const long = localStorage.getItem("longitude")
            if ((typeof (dadosmapa.latitude) !== undefined) && lati !== dadosmapa.latitude && long !== dadosmapa.longitude) {
                localStorage.setItem('latitude', dadosmapa.latitude)
                localStorage.setItem('longitude', dadosmapa.longitude)
                setPositionAlojamento({ lat: dadosmapa.latitude, lng: dadosmapa.longitude })

            } else {
                console.log('ola3')
                setPositionAlojamento({
                    lat: lati,
                    lng: long
                })

            }

        } else {
            console.log('ola4')
            localStorage.setItem('latitude', dadosmapa.latitude)
            localStorage.setItem('longitude', dadosmapa.longitude)
            setPositionAlojamento({ lat: dadosmapa.latitude, lng: dadosmapa.longitude })
        }
    }, [])

    return (
        <MapContainer
            center={center}
            zoom={5}

        >
            <Marker position={
                [positionAlojamento.lat === undefined
                    ? center.lat
                    : positionAlojamento.lat,
                positionAlojamento.lng === undefined
                    ? center.lng
                    : positionAlojamento.lng
                ]
            } >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


        </MapContainer>)

}
