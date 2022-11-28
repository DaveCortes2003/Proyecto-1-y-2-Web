'use strict';

const userKey = 'users';
const userDataKey = 'userData';

let fname,lastName,cellphone,username,pass,description,speed;

function loadValues(){
    extractValuesUser();

    document.getElementById('text-name').textContent = 'Welcome  ' + username;
    document.getElementById('name').value = fname + ' ' + lastName;
    document.getElementById('speed').value = speed;
    document.getElementById('des').textContent = description;

}
loadValues();

function extractValuesUser(){
    let userData = JSON.parse(localStorage.getItem(userDataKey));

    fname=userData[0].name;
    lastName=userData[0].lastName;
    cellphone=userData[0].cellphone;
    username=userData[0].username;
    pass=userData[0].pass;
    description=userData[0].description;
    speed=userData[0].speed;
}