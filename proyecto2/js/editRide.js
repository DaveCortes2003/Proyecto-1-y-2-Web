'use strict';
const rideDataKey = 'rideData';
const rideData = JSON.parse(localStorage.getItem(rideDataKey));

const rideKey = 'rides';
const userDataKey = 'userData';
let days = [];

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

function saveRide() {

    let indice = 0;
    let contador = 0;
    let id = rideData[0].id;
    const Rname = document.getElementById('Rname').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const description = document.getElementById('des').value;
    const username = rideData[0].username;


    let rides = JSON.parse(localStorage.getItem(rideKey));

    rides.forEach((ride) => {
        if (ride.id == id) {
            indice = contador;
        }
        contador = contador + 1;
    });

    delete rides[indice];

    const ride = {
        Rname,
        start,
        end,
        departure,
        arrival,
        description,
        days,
        username,
        id
    };
    ride.Rname = Rname;
    ride.start = start;
    ride.end = end;
    ride.departure = departure;
    ride.arrival = arrival;
    ride.description = description;
    ride.days = days;
    ride.username = username;
    ride.id = id;


    rides.push(ride);
    localStorage.setItem(rideKey, JSON.stringify(rides.filter(ride => ride != null)));
}

function verificar() {
    let time = rideTime();
    let day = selectDays();
    const Rname = document.getElementById('Rname').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;

    let rides = JSON.parse(localStorage.getItem(rideKey));

    if (!rides) {
        rides = [];
    }

    if (Rname == '' || start == '' || end == '' || departure == '' || arrival == '' || day == false) {
        window.alert("Por favor llene todos los espacios");
    }
    if (time == false) {
        window.alert("La hora de llegada no puede ser menor que la de salida o al menos debe durar 3 minutos");
    }

    else {
        saveRide();
        window.location.href = '/proyecto2/html/dashboard.html';
    }

}

function selectDays() {
    let counter = false;
    if (document.getElementById('monday').checked) {
        days.push("monday");
        counter = true;
    }
    if (document.getElementById('tuesday').checked) {
        days.push("tuesday");
        counter = true;
    }
    if (document.getElementById('wednesday').checked) {
        days.push("wednesday");
        counter = true;
    }
    if (document.getElementById('thursday').checked) {
        days.push("thursday");
        counter = true;
    }
    if (document.getElementById('friday').checked) {
        days.push("friday");
        counter = true;
    }
    if (document.getElementById('saturday').checked) {
        days.push("saturday");
        counter = true;
    }
    if (document.getElementById('sunday').checked) {
        days.push("sunday");
        counter = true;
    }

    return counter;
}

function rideTime() {
    let l = false;

    let dep = document.getElementById('departure').valueAsDate.getTime();
    let arriv = document.getElementById('arrival').valueAsDate.getTime();

    if (arriv >= (dep + 180000)) {
        l = true;
    }

    return l;

}





function bindEvents() {
    jQuery('#button-save').bind('click', function (element) {
        verificar();
        days=[];
    });

    jQuery('#dash-button').bind('click', function (element) {
        window.location.href = '/proyecto2/html/dashboard.html';
    });

    jQuery('#settings-button').bind('click', function (element) {
        window.location.href = '/proyecto2/html/settings.html';
    });

    jQuery('#button-back').bind('click', function (element) {
        window.location.href = '/proyecto2/html/dashboard.html';
    });
}
bindEvents();