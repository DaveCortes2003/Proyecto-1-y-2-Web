'use strict';

const userKey = 'users';
const userDataKey = 'userData';

let fname, lastName, cellphone, username, pass, description, speed;

function loadValues() {
    extractValuesUser();

    document.getElementById('text-name').textContent = 'Welcome  ' + username;
    document.getElementById('name').value = fname + ' ' + lastName;
    document.getElementById('speed').value = speed;
    document.getElementById('des').value = description;

}
loadValues();

function extractValuesUser() {
    let userData = JSON.parse(localStorage.getItem(userDataKey));

    fname = userData[0].fname;
    lastName = userData[0].lastName;
    cellphone = userData[0].cellphone;
    username = userData[0].username;
    pass = userData[0].pass;
    description = userData[0].description;
    speed = userData[0].speed;
}

function dataUser() {
    const user = {
        fname,
        lastName,
        cellphone,
        username,
        pass,
        description,
        speed
    };
    user.fname = fname;
    user.lastName = lastName;
    user.cellphone = cellphone;
    user.username = username;
    user.pass = pass;
    user.description = description;
    user.speed = speed;

    let users = [];

    users.push(user);
    localStorage.removeItem(userDataKey);
    localStorage.setItem(userDataKey, JSON.stringify(users));

}

function saveListUsers() {
    const user = {
        fname,
        lastName,
        cellphone,
        username,
        pass,
        description,
        speed
    };
    user.fname = fname;
    user.lastName = lastName;
    user.cellphone = cellphone;
    user.username = username;
    user.pass = pass;
    user.description = description;
    user.speed = speed;

    let users = JSON.parse(localStorage.getItem(userKey));

    users.forEach((user,index)=>{
        if(user.username == username){
            delete users[index];
        }
    });
    
    users.push(user);

    localStorage.setItem(userKey, JSON.stringify(users.filter(user=>user !=null)));

}

function saveValuesUser() {
    speed = document.getElementById('speed').value;
    description = document.getElementById('des').value;
    dataUser();
    saveListUsers();
}


function bindEvents() {
    jQuery('#button-save').bind('click', function (element) {
        saveValuesUser();
    });
}
bindEvents();