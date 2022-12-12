'use strict';
const ridesKey = 'rides';
const userDataKey = 'userData';
const rideDataKey = 'rideData';

let started, ended;

function extractValues() {
    started = (document.getElementById('from').value).toLowerCase();
    ended = (document.getElementById('to').value).toLowerCase();
}

function showListOfRides() {
    extractValues();
    const rides = JSON.parse(localStorage.getItem(ridesKey));
    const userData = JSON.parse(localStorage.getItem(userDataKey));
    const table = document.getElementById('rides_table');

    if (rides) {
        let rows = "";
        rides.forEach((ride) => {
            if (started == (ride.start).toLowerCase() && ended == (ride.end).toLowerCase()) {
                let row = `<tr>`;
                row += `<td>${ride.username}</td>`;
                row += `<td>${ride.start}</td>`;
                row += `<td>${ride.end}</td>`;
                row += `<td> <a onclick="viewRide(${ride.id})" class="link view" href="#">View</a></td>`;
                rows += row + "</tr>";
            }
        });
        table.innerHTML = rows;
    }
}
function dataRide(identification) {
    let id, Rname, start, end, departure, arrival, description, username, days;
    const listRides = JSON.parse(localStorage.getItem(ridesKey));

    listRides.forEach((ride) => {
        if (ride.id == identification) {
            id = ride.id;
            Rname = ride.Rname;
            start = ride.start;
            end = ride.end;
            departure = ride.departure;
            arrival = ride.arrival;
            description = ride.description;
            username = ride.username;
            days = ride.days;
        }
    });


    const ride = {
        id,
        Rname,
        start,
        end,
        departure,
        arrival,
        description,
        username,
        days
    };
    ride.id = id;
    ride.Rname = Rname;
    ride.start = start;
    ride.end = end;
    ride.departure = departure;
    ride.arrival = arrival;
    ride.description = description;
    ride.username = username;
    ride.days = days;

    let rides = [];

    rides.push(ride);
    localStorage.removeItem(rideDataKey);
    localStorage.setItem(rideDataKey, JSON.stringify(rides));

}
function viewRide(id) {
    dataRide(id);
    window.location.href = '/proyecto2/html/onlyReadRide.html';
}


function bindEvents() {
    jQuery('#find-ride').bind('click', function (element) {
        showListOfRides();
    });

    jQuery('#button-login').bind('click', function (element) {
        window.location.href = '/proyecto2/html/login.html';
    });
}
bindEvents();