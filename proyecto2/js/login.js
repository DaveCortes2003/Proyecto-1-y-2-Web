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
            dataUser(user.fname,user.lastName,user.cellphone,user.username,user.pass,user.description,user.speed);
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
function dataUser(na,ln,cp,un,pa,des,sp){
    const fname = na;
    const lastName = ln;
    const cellphone = cp;
    const username = un;
    const pass = pa;
    const description = des;
    const speed = sp;

    const user = {
        fname,
        lastName,
        cellphone,
        username,
        pass,
        description,
        speed
    };
    user.fname=fname;
    user.lastName=lastName;
    user.cellphone=cellphone;
    user.username=username;
    user.pass=pass;
    user.description=description;
    user.speed=speed;

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