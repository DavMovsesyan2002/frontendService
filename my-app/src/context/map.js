import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MapContext = createContext({});

function MapContextProvider({ children }) {
    const [zoom,setZoom] = useState(13)
    const center = [51.505, -0.09]
    const [routeFrom, setRouteFrom] = useState([51.519, -0.12])
    const [routeTo, setRouteTo] = useState([51.500, -0.09])
    const [polyline,setPolyline] = useState([[51.501, -0.09], [51.51, -0.1], [51.51, -0.12]])
    const [multiPolyline, setMultiPolyline] = useState([[51.510, -0.12], [51.520, -0.12]])

    return (
        <>
            <MapContext.Provider value={{ zoom, setZoom, center, routeFrom, setRouteFrom, routeTo, setRouteTo, polyline, setPolyline, multiPolyline, setMultiPolyline }}>{children}</MapContext.Provider>
        </>
    );
}

MapContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useMap = () => {
    return useContext(MapContext);
};

export { MapContextProvider, useMap };