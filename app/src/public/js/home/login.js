"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        password: password.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    // fetch("login", {
    //     body: JSON.stringify(req)
    // })
}