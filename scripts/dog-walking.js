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

  // Hazelborough Wood
  const hazelboroughWood = new AdvancedMarkerElement({
    map,
    position: { lat: 52.08366638248044, lng: -1.036224267984604 },
  });
  const hazelboroughWoodInfoWindow = new google.maps.InfoWindow({
    content:
      "<h4> Hazelborough Wood</h4><a href='#hazelborough-wood'>Learn more</a>",
    ariaLabel: "Hazelborough Wood",
  });
  hazelboroughWood.addListener("click", () => {
    hazelboroughWoodInfoWindow.open({
      anchor: hazelboroughWood,
      map,
    });
  });
  // Bucknell Wood
  const bucknellWood = new AdvancedMarkerElement({
    map,
    position: { lat: 52.100552511752376, lng: -1.0354296251096682 },
  });
  const bucknellWoodInfoWindow = new google.maps.InfoWindow({
    content: "<h4>Bucknell Wood</h4><a href='#bucknell-wood'>Learn more</a>",
    ariaLabel: "Bucknell Wood",
  });
  bucknellWood.addListener("click", () => {
    bucknellWoodInfoWindow.open({
      anchor: bucknellWood,
      map,
    });
  });
  // Water medows
  const waterMedows = new AdvancedMarkerElement({
    map,
    position: { lat: 52.13471769538957, lng: -0.9880020790647283 },
    title: "tets",
  });
  const waterMedowsInfoWindow = new google.maps.InfoWindow({
    content:
      "<h4>Towcester water medows</h4><a href='#water-medows'>Learn more</a>",
    ariaLabel: "Towcester water medows",
  });
  waterMedows.addListener("click", () => {
    waterMedowsInfoWindow.open({
      anchor: waterMedows,
      map,
    });
  });
  // Grand union
  const grandUnionCanal = new AdvancedMarkerElement({
    map,
    position: { lat: 52.171584304259866, lng: -0.929238404060234 },
  });
  const grandUnionCanalInfoWindow = new google.maps.InfoWindow({
    content: "<h4>Grand union canal</h4><a href='#grand-union'>Learn more</a>",
    ariaLabel: "Grand union canal",
  });
  grandUnionCanal.addListener("click", () => {
    grandUnionCanalInfoWindow.open({
      anchor: grandUnionCanal,
      map,
    });
  });
  // Everdon stubbs
  const everdonStubbs = new AdvancedMarkerElement({
    map,
    position: { lat: 52.20502310546735, lng: -1.1175904957438392 },
  });
  const everdonStubbsInfoWindow = new google.maps.InfoWindow({
    content: "<h4> Everdon stubbs</h4><a href='#everdon-stubbs'>Learn more</a>",
    ariaLabel: " Everdon stubbs",
  });
  everdonStubbs.addListener("click", () => {
    everdonStubbsInfoWindow.open({
      anchor: everdonStubbs,
      map,
    });
  });
}

initMap();
