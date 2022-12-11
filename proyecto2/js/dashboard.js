'use strict';
const ridesKey = 'rides';

function showListOfRides() {
    const rides = JSON.parse(localStorage.getItem(ridesKey));
    const table = document.getElementById('rides_table');

    if (rides) {
      let rows = "";
      rides.forEach((ride) => {
        let row = `<tr>`;
        row += `<td>${ride.Rname}</td>`;
        row += `<td>${ride.start}</td>`;
        row += `<td>${ride.end}</td>`;
        row += `<td> <a onclick="viewRide(${ride.id})" class="link view" href="#">View</a>  | <a onclick="editRide(${ride.id})" class="link edit" href="#">Edit</a>  |  <a  onclick="deleteRide(${ride.id});" class="delete" href="#">Delete</a>  </td>`;
        rows += row + "</tr>";
      });
      table.innerHTML = rows;
    }
}

function deleteRide(a){
    let indice=0;
    let contador=0;
    let rides = JSON.parse(localStorage.getItem(ridesKey));
    rides.forEach((ride)=>{
      if(ride.id == a){
        indice=contador;
      }
      contador=contador+1;
    });

    delete rides[indice];

    localStorage.setItem(ridesKey, JSON.stringify(rides.filter(book=>book !=null)));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem(ridesKey)));
    window.location.href = '/proyecto2/html/dashboard.html';
  }
showListOfRides();