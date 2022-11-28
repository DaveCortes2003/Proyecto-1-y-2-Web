'use strict';
const userKey = 'users';
const userDataKey = 'userData';


function verificar() {
    let v=false;
    const username = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    let users = JSON.parse(localStorage.getItem(userKey));
    if (!users) {
        users = [];
    }

    users.forEach((user)=>{
        if(user.username == username && user.pass == pass){
            dataUser(user.name,user.lastName,user.cellphone,user.username,user.pass);
            v=true;
        }
    });
    if(v==false){
        window.alert("El usuario y la contraseña no coinciden");
    }
    else{
        window.location.href = '/proyecto2/html/dashboard.html';
    }
}
function dataUser(na,ln,cp,un,pa){
    const name = na;
    const lastName = ln;
    const cellphone = cp;
    const username = un;
    const pass = pa;

    const user = {
        name,
        lastName,
        cellphone,
        username,
        pass
    };
    user.name=name;
    user.lastName=lastName;
    user.cellphone=cellphone;
    user.username=username;
    user.pass=pass;

    let users = [];

    users.push(user);
    localStorage.removeItem(userDataKey);
    localStorage.setItem(userDataKey, JSON.stringify(users));

}

function bindEvents() {
	jQuery('#login-button').bind('click', function (element) {
		verificar();
	});
}
bindEvents();