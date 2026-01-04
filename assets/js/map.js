// Initialisation de la carte
const nazcaMap = L.map("nazca_map", {
  center: [-14.692514, -75.148889], // Nazca
  zoom: 11,
  maxZoom: 17,
  fullscreenControl: true,        // active le bouton
  fullscreenControlOptions: {
    position: 'bottomleft'          // position du bouton
  }
});


// OpenStreetMap
const esriImagery = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri"
  }
).addTo(nazcaMap);

const osm = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "© OpenStreetMap contributors"
  }
).addTo(nazcaMap);


// Groupe pour la couche GeoJSON
const nazcaLayer = L.geoJSON(null, {
  pointToLayer: (feature, latlng) =>
    L.circleMarker(latlng, {
      radius: 6,
      fillColor: "#ff0000ff",
      color: "#f14f4fff",
      weight: 1,
      fillOpacity: 0.8
    }),
  onEachFeature: (feature, layer) => {
    if (feature.properties) {
      const name = feature.properties.nom || "Nom inconnu";
      const dimensions = feature.properties.dimensions || "Dimensions inconnues";
      const notes = feature.properties.notes || "Notes indisponibles";

      // Contenu HTML du popup
      const popupContent = `
        <div style="font-size: 15px;">
          <center><h5>${name}</h5></center>
          <b>Dimensions:</b> ${dimensions}<br>
          ${notes}
          </div>`;
      
      layer.bindPopup(popupContent);
      
      // Zoom sur le point lorsqu'on clique dessus
      layer.on('click', function(e) {
        // zoom à 17 et centre sur le point
        layer._map.setView(e.latlng, 17);
      });

    }
  }
});


// Chargement du GeoJSON
fetch(geojsonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erreur de chargement du GeoJSON");
    }
    return response.json();
  })
  .then((data) => {
    nazcaLayer.addData(data);
    nazcaMap.fitBounds(nazcaLayer.getBounds());
    nazcaLayer.addTo(nazcaMap);
  })
  .catch((error) => {
    console.error(error);
  });

// Contrôle des couches
const baseLayers = {
  "OpenStreetMap": osm,
  "ESRI Imagery": esriImagery,
  
};

const overlays = {
  "Nazca – points": nazcaLayer
};

L.control.layers(
    baseLayers, 
    overlays
).addTo(nazcaMap);