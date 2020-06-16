const mapsBase = "https://www.google.com/maps/search/?api=1&query=";
const addressSuffix = "%2C+Sunnyvale%2C+CA+94089";

var spaceNumbers;

loadJSON();

function loadJSON() {
  let xhr = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        spaceNumbers = JSON.parse(this.responseText);
    };
  };
  xhr.open('GET', 'data.json');
  xhr.send();
};

function updateLink() {
  let selectedNumber = document.getElementById("space-number").value;
  let mapsAddress = selectedNumber + " " + spaceNumbers[selectedNumber];
  let mapsQuery = mapsAddress.split(" ").join("+") + addressSuffix;
  let mapsUrl = mapsBase + mapsQuery
  document.getElementById("maps-link").innerHTML = `<a href="${mapsUrl}">${mapsAddress}</a>`;
};
