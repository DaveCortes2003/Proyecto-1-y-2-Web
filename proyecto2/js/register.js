'use strict';
const userKey = 'users';
function saveUser() {
    
	const name = document.getElementById('name').value;
	const lastName = document.getElementById('Lname').value;
    const cellphone = document.getElementById('phone').value;
    const username = document.getElementById('Username').value;
    const pass = document.getElementById('pass').value;
    const Rpass = document.getElementById('Rpass').value;
	// add it to the database

    const user = {
		name,
		lastName,
        cellphone,
        username,
        pass,
        Rpass
	};
    user.name=name;
    user.lastName=lastName;
    user.cellphone=cellphone;
    user.username=username;
    user.pass=pass;
    user.Rpass=Rpass;

    let users = JSON.parse(localStorage.getItem(userKey));

    if (!users) {
        users = [];
      }

    users.push(user);


	localStorage.setItem(userKey, JSON.stringify(users));


	clearFields();
    window.location.href = '/proyecto2/html/login.html';
}

function clearFields() {
	document.getElementById('name').value = '';
	document.getElementById('Lname').value = '';
	document.getElementById('phone').value = '';
    document.getElementById('Username').value = '';
	document.getElementById('pass').value = '';
	document.getElementById('Rpass').value = '';
}



/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	jQuery('#save-user-button').bind('click', function (element) {
		saveUser();
	});
}
bindEvents();