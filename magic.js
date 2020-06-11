const mapsBase = "https://www.google.com/maps/place/"
var spaceNumbers

$.getJSON("data.json", function(json){
  spaceNumbers = json
})

function updateLink() {
  const selectedNumber = document.getElementById("space-number").value;
  const mapsAddress = selectedNumber + " " + spaceNumbers[selectedNumber];
  const queryAddress = mapsAddress.split(" ").join("+") + ",Sunnyvale,CA";
  document.getElementById("maps-link").innerHTML = "<a href=" + mapsBase + queryAddress + ">" + mapsAddress + "</a>";
}
