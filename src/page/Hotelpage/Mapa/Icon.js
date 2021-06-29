import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../../assets/pngfind.com-google-map-icon-png-6710794.png'),
    iconRetinaUrl: require('../../../assets/pngfind.com-google-map-icon-png-6710794.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };