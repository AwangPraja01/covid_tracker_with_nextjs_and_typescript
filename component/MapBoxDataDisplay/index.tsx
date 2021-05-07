import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import useSWR from "swr";
import lookup from "country-code-lookup";
import "mapbox-gl/dist/mapbox-gl.css";

// secret token = sk.eyJ1IjoiZGFya2NvZGUzMjEiLCJhIjoiY2tvZWdva3piMDU0bzJucDJhbzgwN3dvbSJ9.HfT6GqzWDF7Ne2Uma8l1KA

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFya2NvZGUzMjEiLCJhIjoiY2tvZWZ6Z2k4MGExYTJ1cHd6aThxdjFpZCJ9.ckpEesiEsYgRN7Sw-Jh9IQ";

const MapBoxDataDisplay = () => {
  const mapboxElRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [16, 27],
      zoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <div className='bg-white rounded-md shadow-md mt-5 p-4'>
      <div className='rounded-md h-96 w-full' ref={mapboxElRef}></div>
    </div>
  );
};

export default MapBoxDataDisplay;
