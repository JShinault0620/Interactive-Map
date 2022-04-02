let latitude = 0
let longitude = 0

const renderMap = (geo) => {
    const myMap = L.map('map', {
        center: [geo.coords.latitude, geo.coords.longitude],
        zoom: 15
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '0',
    }).addTo(myMap)
}

const geoError = (error) => {
    if (error.code === error.PERMISSION_DENIED) {
        document.getElementById('map').innerHTML = '<h1>You have denied location services</h1>'
    }
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(renderMap, geoError)
} else {
    document.getElementById('map').innerHTML = '<h1>Your browser does not support geolocation</h1>'
}