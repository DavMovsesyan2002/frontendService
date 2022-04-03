import {Circle, CircleMarker, MapContainer, Polyline, Popup, TileLayer, useMapEvent} from "react-leaflet";
import {useEffect, useState} from "react";
import {useMap} from "../context/map";


const MapComponent = () => {
    const fillBlueOptions = { fillColor: 'blue' }
    const limeOptions = { color: 'lime' }
    const redOptions = { color: 'red' }
    const {zoom, center,routeFrom, routeTo, polyline, multiPolyline} = useMap()

    return(
            <div className='column'>
                <MapContainer center={center} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={routeFrom} pathOptions={fillBlueOptions} radius={200} />
                    <CircleMarker
                        center={routeTo}
                        pathOptions={redOptions}
                        radius={20}>
                        <Popup>Popup in CircleMarker</Popup>
                    </CircleMarker>
                    <Polyline pathOptions={limeOptions} positions={polyline} />
                    <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                </MapContainer>
            </div>
    )
}

export default MapComponent;