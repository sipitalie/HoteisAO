import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import L, { LatLngExpression } from "leaflet";
import './index.css'
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { alojamentos_details } from '../../../store/fetchActions';
//, 


export const Mapa = ({ dados }) => {


    const [center, setCenter] = useState({ lat: -11.2135241, lng: 17.8770032 });

    const [positionMarker, setPositionMarker] = useState([])
    useEffect(() => {
        setPositionMarker([dados.latitude, dados.longitude])
        console.log(positionMarker)
    }, [])

    return (
        <MapContainer
            center={center}
            zoom={5}

        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-12.5875503, 13.399516499999999]} >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>


        </MapContainer>)

}
