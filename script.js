
var x=document.getElementById("login")
var y=document.getElementById("signup")
var z=document.getElementById("btn")
var a=document.getElementById("signup-btn");
var b=document.getElementById("login-btn");

document.querySelector("#signup-btn").addEventListener("click",function(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
    
    a.classList.add("white")
    a.classList.remove("black")
    b.classList.add("black")
    y.classList.add("signup-class")
    
})

document.querySelector("#login-btn").addEventListener("click",function(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
    
    b.classList.add("white")
    b.classList.remove("black")
    a.classList.add("black")
     
})