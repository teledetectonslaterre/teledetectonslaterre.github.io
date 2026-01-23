const labels = {
  fr: {
    dimensions: "Dimensions",
    unknown_dimensions: "Dimensions inconnues"
  },
  en: {
    dimensions: "Dimensions",
    unknown_dimensions: "Unknown dimensions"
  }
};

const LBL = labels[PAGE_LANG] || labels.en;


// Initialisation de la carte
const nazcaMap = L.map("nazca_map", {
  center: [-14.692514, -75.148889], // Nazca
  zoom: 12,
  maxZoom: 17,
  fullscreenControl: true,        // active le bouton
  fullscreenControlOptions: {
    position: 'bottomleft'          // position du bouton
  }
});

nazcaMap.on('popupopen', function (e) {
  const popup = e.popup;
  const popupEl = popup.getElement();
  if (!popupEl) return;

  const adjustPopupPosition = () => {
    const popupHeight = popupEl.offsetHeight;
    const mapHeight = nazcaMap.getSize().y;

    const px = nazcaMap.project(popup.getLatLng());

    if (popupHeight > mapHeight * 0.6) {
      px.y -= popupHeight / 2;
      nazcaMap.panTo(nazcaMap.unproject(px), { animate: true });
    }
  };

  // 1️⃣ Ajustement immédiat (sans image)
  adjustPopupPosition();

  // 2️⃣ Ajustement APRÈS chargement des images
  const images = popupEl.querySelectorAll("img");
  images.forEach(img => {
    if (!img.complete) {
      img.onload = adjustPopupPosition;
    }
  });
});


const initialView = nazcaMap.getCenter();
const initialZoom = nazcaMap.getZoom();

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

// Création d'un contrôle personnalisé
const resetControl = L.Control.extend({
  options: {
    position: 'topright' // tu peux changer : 'topleft', 'bottomright', 'bottomleft'
  },
  onAdd: function(map) {
    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

    container.style.backgroundColor = 'white';
    container.style.padding = '5px';
    container.style.cursor = 'pointer';
    container.style.fontSize = '14px';
    container.style.fontWeight = 'bold';
    container.style.textAlign = 'center';
    container.innerHTML = 'Recentrer';

    // éviter que le clic se propage à la carte
    L.DomEvent.disableClickPropagation(container);

    // action au clic
    container.onclick = function() {
      map.setView(initialView, initialZoom, { animate: true });
    }

    return container;
  }
});

// Ajout du contrôle personnalisé à la carte
nazcaMap.addControl(new resetControl());

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

      const props = feature.properties;

      //const name = props.nom || "Nom inconnu";
      let name;
      if (PAGE_LANG === "fr") {
        name = props.nom || "Nom inconnu";
      } else {
        name = props.name || "Unknown name";
      }


      //const dimensions = props.dimensions || "Dimensions inconnues";
      //const dimensions = props.dimensions || LBL.unknown_dimensions;
      let dimensions;
      if (PAGE_LANG === "fr") {
        dimensions = props.dimensions_fr || "Dimensions inconnues";
      } else {
        dimensions = props.dimensions_en || "Unknown dimensions";
      }


      // Image + source (si disponibles)
      let imageHtml = "";
      if (props.image) {
      imageHtml = `
        <figure class="image-figure text-center">
          <a 
            href="${props.image}"
            data-lightbox="nazca"
            data-title="${name}${props.Source ? ' — Source : ' + props.Source : ''}"
          >
            <img 
              src="${props.image}" 
              alt="${name}"
              class="img-fluid"
              style="cursor: zoom-in;"
            >
          </a>
          ${props.Source ? `<figcaption style="font-size: 11px; color: #555;">Source : ${props.Source}</figcaption>` : ""}
        </figure>
      `;
      } 

      const popupContent = `
          <div style="font-size: 15px;">
            <center><h5>${name}</h5></center>
            ${imageHtml}
            <b>${LBL.dimensions}:</b> ${dimensions}<br>
          </div>
        `;


      // Contenu HTML du popup
      //const popupContent = `
      //  <div style="font-size: 15px;">
      //    <center><h5>${name}</h5></center>
      //    ${imageHtml}
      //    <b>Dimensions:</b> ${dimensions}<br>
      //    </div>`;
      //
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