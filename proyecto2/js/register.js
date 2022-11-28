'use strict';
const userKey = 'users';
function saveUser() {

    let valor=verificar();
	
    if(valor == true){
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('Lname').value;
        const cellphone = document.getElementById('phone').value;
        const username = document.getElementById('Username').value;
        const pass = document.getElementById('pass').value;
        const Rpass = document.getElementById('Rpass').value;
        const description = '';
        // add it to the database

        const user = {
            name,
            lastName,
            cellphone,
            username,
            pass,
            Rpass,
            description
        };
        user.name=name;
        user.lastName=lastName;
        user.cellphone=cellphone;
        user.username=username;
        user.pass=pass;
        user.Rpass=Rpass;
        user.description=description;

        let users = JSON.parse(localStorage.getItem(userKey));

        if (!users) {
            users = [];
        }

        users.push(user);


        localStorage.setItem(userKey, JSON.stringify(users));


        clearFields();
        window.location.href = '/proyecto2/html/login.html';
    }
}
function verificar(){
    let l =false;
    const name = document.getElementById('name').value;
	const lastName = document.getElementById('Lname').value;
    const cellphone = document.getElementById('phone').value;
    const username = document.getElementById('Username').value;
    const pass = document.getElementById('pass').value;
    const Rpass = document.getElementById('Rpass').value;

    let users = JSON.parse(localStorage.getItem(userKey));

    if (!users) {
        users = [];
    }

    if(name=='' || lastName=='' || cellphone=='' || username=='' || pass=='' || Rpass==''){
        window.alert("Por favor llene todos los espacios");
    }
    if(pass != Rpass){
        window.alert("Las contraseñas no coinciden");
    }

    else{
        l=true;
        users.forEach((user)=>{
            if(user.username == username){
                window.alert("El username ya existe");
                l=false;
            }
        });
    }

    return l;
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