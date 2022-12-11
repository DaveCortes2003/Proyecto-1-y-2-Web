'use strict';
const ridesKey = 'rides';
const userDataKey = 'userData';
const rideDataKey = 'rideData';

function loadValues() {
  const userData = JSON.parse(localStorage.getItem(userDataKey));
  document.getElementById('text-name').textContent = 'Welcome  ' + userData[0].username;

}
loadValues();

function showListOfRides() {
  const rides = JSON.parse(localStorage.getItem(ridesKey));
  const userData = JSON.parse(localStorage.getItem(userDataKey));
  const table = document.getElementById('rides_table');

  if (rides) {
    let rows = "";
    rides.forEach((ride) => {
      if (userData[0].username == ride.username) {
        let row = `<tr>`;
        row += `<td>${ride.Rname}</td>`;
        row += `<td>${ride.start}</td>`;
        row += `<td>${ride.end}</td>`;
        row += `<td> <a onclick="viewRide(${ride.id})" class="link view" href="#">View</a>  | <a onclick="editRide(${ride.id})" class="link edit" href="#">Edit</a>  |  <a  onclick="deleteRide(${ride.id});" class="delete" href="#">Delete</a>  </td>`;
        rows += row + "</tr>";
      }
    });
    table.innerHTML = rows;
  }
}
function viewRide(id){
  dataRide(id);
  window.location.href = '/proyecto2/html/verRides.html';
}
function editRide(id){
  dataRide(id);
  window.location.href = '/proyecto2/html/editRide.html';
}


function deleteRide(a) {
  let indice = 0;
  let contador = 0;
  let rides = JSON.parse(localStorage.getItem(ridesKey));
  rides.forEach((ride) => {
    if (ride.id == a) {
      indice = contador;
    }
    contador = contador + 1;
  });

  delete rides[indice];

  localStorage.setItem(ridesKey, JSON.stringify(rides.filter(ride => ride != null)));
  console.log(JSON.parse(localStorage.getItem(ridesKey)));
  window.location.href = '/proyecto2/html/dashboard.html';
}

function dataRide(identification) {
  let id, Rname, start, end, departure, arrival, description, username,days;
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

showListOfRides();

function bindEvents() {
	jQuery('#back-button').bind('click', function (element) {
		window.location.href = '/proyecto2/html/login.html';
	});

    jQuery('#add-ride-button').bind('click', function (element) {
		window.location.href = '/proyecto2/html/addRide.html';
	});

  jQuery('#button-settings').bind('click', function (element) {
		window.location.href = '/proyecto2/html/settings.html';
	});
}
bindEvents();
