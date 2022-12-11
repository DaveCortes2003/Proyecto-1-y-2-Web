'use strict';
const rideDataKey = 'rideData';
const rideData = JSON.parse(localStorage.getItem(rideDataKey));

function loadValues() {
    document.getElementById('text-name').textContent = 'Welcome  ' + rideData[0].username;
    document.getElementById('Rname').value = rideData[0].Rname;
    document.getElementById('start').value = rideData[0].start;
    document.getElementById('end').value = rideData[0].end;
    document.getElementById('des').value = rideData[0].description;
    document.getElementById('departure').value = rideData[0].departure;
    document.getElementById('arrival').value = rideData[0].arrival;

    for (let i = 0; i < rideData[0].days.length; i++) {
        document.getElementById(rideData[0].days[i]).checked = true;
    }

}

loadValues();