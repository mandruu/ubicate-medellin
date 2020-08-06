let myMap = L.map('myMap').setView([6.25184, -75.56359], 12.5)

L.tileLayer(`https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png`, {
  maxZoom: 18,
}).addTo(myMap);

let marker = L.marker([6.2366666666667, -75.580277777778]).addTo(myMap);

let marker2 = L.marker([6.2458333333333, -75.572222222222]).addTo(myMap);

let marker3 = L.marker([6.25027778, -75.56833333]).addTo(myMap);

marker.bindPopup("<b>Pueblito paisa</b><br>Pueblo tipico Paisa.<img class='medellin-img esp-top' src='images/pueblito-paisa.jpg' alt='plaza botero'>");
marker2.bindPopup("<b>Parque de las luces</b><br>Ilumina tu noche.<img class='medellin-img esp-top' src='images/parque-luces.jpg' alt='plaza botero'>");
marker3.bindPopup("<b>Plaza Botero</b><br>Hermosas esculturas.<img class='medellin-img esp-top' src='images/botero.jpg' alt='plaza botero'>").openPopup();

let iconMarker = L.icon({
  iconUrl: 'images/marcador.png',
  iconSize: [60, 60],
  iconAnchor: [30, 60]
})

myMap.doubleClickZoom.disable()

myMap.on('dblclick', e => {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent);
  marker4 = L.marker([latLng.lat, latLng.lng]).bindPopup("  <table><tr><td><label for='fname' class='color fuente-cel'>Titulo:</label></td><td><input type='text' class='fuente-cel2' id='fname' name='fname'></td></tr><tr><td><label for='fname' class='color fuente-cel'>Contenido:</label></td><td><input type='text' id='fname2' class='fuente-cel2' name='fname2'></td></tr><tr><td><label for='fname' class='color fuente-cel'>Url Imagen:</label></td><td><input type='text' id='fname3' class='fuente-cel2' name='fname3'></td></tr><tr><td colspan='2' class='centrar'><button type='button' onclick='myFunction()' class='btn btn-danger fuente-cel'>Guardar</button></td></tr></table>").addTo(myMap).openPopup();

})


function myFunction() {
  var titulo = document.getElementById("fname").value;
  var contenido = document.getElementById("fname2").value;
  var imagen = document.getElementById("fname3").value;
  if (eval != "") {
    marker4.bindPopup("<b>"+titulo+"</b><br>"+contenido+"<img class='medellin-img esp-top' src='"+imagen+"' alt='Imagen'>").openPopup();
  }


}
