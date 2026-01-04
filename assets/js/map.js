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
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
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