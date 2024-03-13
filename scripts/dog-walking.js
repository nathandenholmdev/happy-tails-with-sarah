async function initMap() {
  // Request needed libraries.
  const center = { lat: 52.12656911020292, lng: -0.9954385447190256 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("dog-walking-locations"), {
    center,
    zoom: 9.5,
    mapId: "4504f8b37365c3d0",
  });
  // Hazelburogh
  new AdvancedMarkerElement({
    map,
    position: { lat: 52.08366638248044, lng: -1.036224267984604 },
  });
  // Bucknall wood
  new AdvancedMarkerElement({
    map,
    position: { lat: 52.100552511752376, lng: -1.0354296251096682 },
  });
  // Water medows
  new AdvancedMarkerElement({
    map,
    position: { lat: 52.13471769538957, lng: -0.9880020790647283 },
  });
  // Grand union
  new AdvancedMarkerElement({
    map,
    position: { lat: 52.171584304259866, lng: -0.929238404060234 },
  });
  // Everdon stubbs
  new AdvancedMarkerElement({
    map,
    position: { lat: 52.20502310546735, lng: -1.1175904957438392 },
  });
}

initMap();
