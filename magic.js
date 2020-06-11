const mapsBase = "https://www.google.com/maps/search/?api=1&query="
const addressSuffix = "%2C+Sunnyvale%2C+CA+94089"

var spaceNumbers

$.getJSON("data.json", function(json){
  spaceNumbers = json
})

function updateLink() {
  const selectedNumber = document.getElementById("space-number").value;
  const mapsAddress = selectedNumber + " " + spaceNumbers[selectedNumber];
  const queryAddress = mapsAddress.split(" ").join("+") + addressSuffix;
  document.getElementById("maps-link").innerHTML = "<a href=" + mapsBase + queryAddress + ">" + mapsAddress + "</a>";
}
