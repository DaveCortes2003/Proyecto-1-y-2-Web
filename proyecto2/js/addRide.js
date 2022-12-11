'use strict';
const rideKey = 'rides';
const userDataKey = 'userData';
let days = [];
function saveRide() {

    let userData = JSON.parse(localStorage.getItem(userDataKey));
    let id = 1;
    const Rname = document.getElementById('Rname').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const description = document.getElementById('des').value;
    const username = userData[0].username;


    let rides = JSON.parse(localStorage.getItem(rideKey));

    if (!rides) {
        rides = [];
    }

    else {
        id = rides[rides.length - 1].id + 1
    }
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


    localStorage.setItem(rideKey, JSON.stringify(rides));
    

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
        window.location.href = '/proyecto2/html/addRide.html';
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
}
bindEvents();