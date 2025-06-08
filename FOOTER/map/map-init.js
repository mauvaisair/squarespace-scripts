/*-*-*-*-*-*-*-*-*-*-*-*-*-* MAP INIT *-*-*-*-*-*-*-*-*-*-*-*-*-*/

/*                     map.css     map.html                     */

/*
https://cdn.jsdelivr.net/gh/mauvaisair/squarespace-scripts@main/map-init.js
*/



function getCustomPopupHTML() {
  return `
  
<div style="position: relative;">
      <img src="https://images.squarespace-cdn.com/content/v1/65a936b90ca5da4a763ea868/1741911219892-41ASPV4H5EMLG61PX5OW/MAUVAISAIR+TATTOO+STUDIO+TATTOO+CHIBOUGAMAU+-+book+-+re%CC%81server.png" alt="Studio">
      <button class="custom-info-close" onclick="this.parentElement.parentElement.style.display='none'">&times;</button>
    </div>
    <div style="font-weight: bold; margin-bottom: 4px; margin-left: 4px;">
      <a href="https://maps.app.goo.gl/GyB1qfJf6hW1SQZb8" target="_blank" style="color: black; text-decoration: underline;">MAUVAISAIR TATTOO</a> 📍
    </div>
    <div style="margin-bottom: 4px; margin-left: 4px; color: black;">
      859 5e Rue, Chibougamau, QC G8P 1V6
    </div>
  `;
}

function initMaps() {
  const baseStyle = [
    { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
    { "elementType": "labels", "stylers": [{ "visibility": "off" }] },
    { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] },
    { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#757575" }] },
    { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
    { "featureType": "administrative.land_parcel", "stylers": [{ "visibility": "off" }] },
    { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }] },
    { "featureType": "administrative.neighborhood", "stylers": [{ "visibility": "off" }] },
    { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#121212" }, { "visibility": "on" }] },
    { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "color": "#7a7a7a" }, { "visibility": "on" }] },
    { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#858585" }] },
    { "featureType": "landscape.natural.landcover", "stylers": [{ "color": "#000000" }] },
    { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#181818" }] },
    { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
    { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1b1b1b" }] },
    { "featureType": "road", "stylers": [{ "color": "#b0b0b0" }] },
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "visibility": "simplified" }, { "weight": 1 }] },
    { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }, { "visibility": "simplified" }] },
    { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
    { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
    { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
    { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
    { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
    { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#9c9c9c" }] },
    { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
    { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
    { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#1c1c1c" }] },
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d3d3d" }] }
  ]; 
  const location = { lat: 49.91206, lng: -74.37973 };
  const mapElements = document.querySelectorAll('.map-instance');

  mapElements.forEach((el) => {
    const map = new google.maps.Map(el, {
      center: location,
      zoom: 15,
      styles: baseStyle,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      mapTypeControl: false
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "MAUVAISAIR TATTOO",
      icon: {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`<svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C8.13 2 5 5.13 5 9C5 13.25 9.5 19.25 11.26 21.57C11.66 22.1 12.34 22.1 12.74 21.57C14.5 19.25 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z\" fill=\"white\"></path></svg>`),
        scaledSize: new google.maps.Size(34, 34),
        anchor: new google.maps.Point(17, 34)
      }
    });

    const customOverlay = new google.maps.OverlayView();
    customOverlay.onAdd = function () {
      const div = document.createElement("div");
      div.className = "custom-info-window";
      div.innerHTML = getCustomPopupHTML();
      this.div = div;
      this.getPanes().floatPane.appendChild(div);
    };

    customOverlay.draw = function () {
      const projection = this.getProjection();
      const position = projection.fromLatLngToDivPixel(new google.maps.LatLng(location));
      const div = this.div;
      const popupRect = div.getBoundingClientRect();
      const popupWidth = popupRect.width || 260;
      const popupHeight = popupRect.height || 160;
      div.style.left = `${position.x - popupWidth / 2}px`;
      div.style.top = `${position.y - popupHeight / 2}px`;
    };

    customOverlay.onRemove = function () {
      if (this.div) this.div.remove();
    };

    marker.addListener("click", () => {
      customOverlay.setMap(map);
      map.panTo(location);
    });
  });
}

window.addEventListener('load', () => {
  if (typeof google !== 'undefined' && google.maps) {
    initMaps();
  }
});



/*
------------- OLD

  function initMap() {
    const location = { lat: 49.91206, lng: -74.37973 };

    const baseStyle = [
      { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
      { "elementType": "labels", "stylers": [{ "visibility": "off" }] },
      { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
      { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
      { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] },
      { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#757575" }] },
      { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
      { "featureType": "administrative.land_parcel", "stylers": [{ "visibility": "off" }] },
      { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }] },
      { "featureType": "administrative.neighborhood", "stylers": [{ "visibility": "off" }] },
      { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#121212" }, { "visibility": "on" }] },
      { "featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "color": "#7a7a7a" }, { "visibility": "on" }] },
      { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#858585" }] },
      { "featureType": "landscape.natural.landcover", "stylers": [{ "color": "#000000" }] },
      { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
      { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#181818" }] },
      { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
      { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [{ "color": "#1b1b1b" }] },
      { "featureType": "road", "stylers": [{ "color": "#b0b0b0" }] },
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "visibility": "simplified" }, { "weight": 1 }] },
      { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }, { "visibility": "simplified" }] },
      { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
      { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#373737" }] },
      { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
      { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
      { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
      { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#9c9c9c" }] },
      { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "color": "#6b6b6b" }] },
      { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
      { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
      { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#1c1c1c" }] },
      { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d3d3d" }] }
    ];

    const map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15,
      styles: baseStyle,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      zoomControl: false,
      fullscreenControl: false,
      mapTypeControl: false
    });

    function updateMapStyle(zoomLevel) {
      const showStreetLabels = zoomLevel > 15;
      const updatedStyle = [...baseStyle];

      updatedStyle.push(
        {
          featureType: "road",
          elementType: "labels.text",
          stylers: [{ visibility: showStreetLabels ? "on" : "off" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ visibility: "off" }]
        }
      );

      map.setOptions({ styles: updatedStyle });
    }

    google.maps.event.addListener(map, "zoom_changed", () => {
      updateMapStyle(map.getZoom());
    });

    updateMapStyle(map.getZoom());

    const customOverlay = new google.maps.OverlayView();
    customOverlay.onAdd = function () {
      const div = document.createElement("div");
      div.className = "custom-info-window";
      div.innerHTML = `
        <div style="position: relative;">
          <img src="https://images.squarespace-cdn.com/content/v1/65a936b90ca5da4a763ea868/1741911219892-41ASPV4H5EMLG61PX5OW/MAUVAISAIR+TATTOO+STUDIO+TATTOO+CHIBOUGAMAU+-+book+-+re%CC%81server.png" alt="Studio">
          <button class="custom-info-close" onclick="this.parentElement.parentElement.style.display='none'">×</button>
        </div>
        <div style="font-weight: bold; margin-bottom: 4px; margin-left: 4px;">
          <a href="https://maps.app.goo.gl/GyB1qfJf6hW1SQZb8" target="_blank" style="color: black; text-decoration: underline;">MAUVAISAIR TATTOO</a> 📍
        </div>
<div style=" margin-bottom: 4px; margin-left: 4px; color: black;">
        859 5e Rue, Chibougamau, QC G8P 1V6
<div>
      `;
      this.div = div;
      const panes = this.getPanes();
      panes.floatPane.appendChild(div);
    };

customOverlay.draw = function () {
  const projection = this.getProjection();
  const position = projection.fromLatLngToDivPixel(new google.maps.LatLng(location));
  const div = this.div;

  // Measure the popup size dynamically
  const popupRect = div.getBoundingClientRect();
  const popupWidth = popupRect.width || 260;
  const popupHeight = popupRect.height || 160;

  // Offset: center horizontally, lift vertically just above the pin
  div.style.left = `${position.x - popupWidth / 2}px`;
  div.style.top = `${position.y - popupHeight / 2}px`;
};
    
    customOverlay.onRemove = function () {
      if (this.div) this.div.remove();
    };

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "MAUVAISAIR TATTOO",
      icon: {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 13.25 9.5 19.25 11.26 21.57C11.66 22.1 12.34 22.1 12.74 21.57C14.5 19.25 19 13.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"></path>
          </svg>
        `),
        scaledSize: new google.maps.Size(34, 34),
        anchor: new google.maps.Point(17, 34)
      }
    });

    marker.addListener("click", () => {
      customOverlay.setMap(map);
      const adjustedCenter = { lat: location.lat, lng: location.lng};
      map.panTo(adjustedCenter);
    });
  }

  // Manual trigger after load
  window.addEventListener('load', () => {
    if (typeof google !== 'undefined' && google.maps) {
      initMap();
    }
  });



*/