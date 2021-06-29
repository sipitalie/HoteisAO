import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useParams } from 'react-router-dom';
import './index.css'
import "leaflet/dist/leaflet.css";
import { iconPerson } from './Icon';
import api from '../../../service/api';


//, 


export function Mapa({ dadosmapa }) {
    const { id } = useParams()
    const [center, setCenter] = useState({ lat: -11.2135241, lng: 17.8770032 });
    const [PopupDescri, setPopoutDescri] = useState('')
    const [positionAlojamento, setPositionAlojamento] = useState({ lat: -11.2135241, lng: 17.8770032 })
    /*useEffect(() => {
        if (localStorage.hasOwnProperty("latitude") && localStorage.hasOwnProperty("longitude")) {


            const lati = localStorage.getItem("latitude")
            const long = localStorage.getItem("longitude")
            if ((typeof (dadosmapa.latitude) !== 'undefined') && lati !== dadosmapa.latitude && long !== dadosmapa.longitude) {
                localStorage.setItem('latitude', dadosmapa.latitude)
                localStorage.setItem('longitude', dadosmapa.longitude)
                setPositionAlojamento({ lat: dadosmapa.latitude, lng: dadosmapa.longitude })

            } else {

                setPositionAlojamento({
                    lat: lati,
                    lng: long
                })

            }

        } else {

            localStorage.setItem('latitude', dadosmapa.latitude)
            localStorage.setItem('longitude', dadosmapa.longitude)
            setPositionAlojamento({ lat: dadosmapa.latitude, lng: dadosmapa.longitude })
        }
    }, [])*/
    useEffect(() => {
        console.log(id)
        api.get(`api.v1/alojamentos/${id}/`).then(res => {
            //console.log(res.data)
            setPositionAlojamento({ lat: res.data.latitude, lng: res.data.longitude })
            setPopoutDescri(res.data.linha)
        })

    }, [])
    console.log(positionAlojamento)

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
            }
            >
                <Popup>
                    {PopupDescri}
                </Popup>

            </Marker>

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


        </MapContainer>)

}
