import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import * as d3 from "d3-ease";
import * as searchSlice from "../SearchBar/searchSlice";

const Map = () => {
    const { lat, lng } = useSelector(searchSlice.selectCoords);

    //default
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lng,
        zoom: 11,
        bearing: 0,
        pitch: 50,
    });

    useEffect(() => {
        setViewport({
            ...viewport,
            latitude: lat,
            longitude: lng,
            zoom: 14,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
            transitionEasing: d3.easeCubic,
        });
    }, [lat, lng]);

    const updateViewPort = () => {
        console.log("in map, coords", lat, lng);
    };

    const [settings, setSettings] = useState({
        dragPan: false,
        dragRotate: false,
        scrollZoom: false,
        touchZoom: false,
        touchRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85,
    });

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                {...viewport}
                {...settings}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
        </div>
    );
};

export default Map;

// https://github.com/visgl/react-map-gl/blob/6.1-release/examples/interaction/src/app.js
