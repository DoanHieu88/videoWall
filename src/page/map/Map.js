import { createContext, useState } from "react";
import { Box } from "@material-ui/core";

import useListMarkersData from "../../hooks/api/useListMarkers";
import ContentMap from "./content/map/ContentMap";
import SideBar from "./content/side-bar/SideBar";

export const MapContext = createContext({});

const Map = () => {
  // const { vtmapgl, map } = useVTMapGL();
  const markerList = useListMarkersData();
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [placeSelected, setPlaceSelected] = useState();
  const [showLiveList, setShowLiveList] = useState([]);
  const [listMarker, setListMarker] = useState({});
  const [infoWindows, setInfoWindows] = useState({});
  const [statusClick, setStatusClick] = useState(false);
  const [deviceListSelected, setDeviceListSelected] = useState({});

  const data = {
    markerList,
    mapApiLoaded,
    places,
    map,
    mapApi,
    placeSelected,
    showLiveList,
    listMarker,
    statusClick,
    deviceListSelected,
    infoWindows,

    setMapApiLoaded,
    setPlaces,
    setMap,
    setMapApi,
    setPlaceSelected,
    setShowLiveList,
    setListMarker,
    setStatusClick,
    setDeviceListSelected,
    setInfoWindows,
  };

  return (
    <MapContext.Provider value={data}>
      <Box style={{ display: "flex" }}>
        <SideBar />
        <ContentMap />
      </Box>
    </MapContext.Provider>
  );
};

export default Map;
