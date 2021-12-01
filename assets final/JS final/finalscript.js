let ADHD = document.getElementById("ADHD"); 
let depression = document.getElementById("depression"); 
let flow = document.getElementById("flow"); 
let nature = document.getElementById("nature"); 
let city = document.getElementById("city"); 


function ADHDsun() {
    sun.style.animationDuration= "3s";
    let seconds=document.getElementById("seconds");
    seconds.style.animationDuration= "1s";
    let hours=document.getElementById("hours");
    hours.style.animationDuration= "11s";
    let minutes=document.getElementById("minutes");
    minutes.style.animationDuration= "4s";
    };

ADHD.onclick=ADHDsun; 

city.onclick=ADHDsun; 

function depressionsun() {
    sun.style.animationDuration= "14s";
    let seconds=document.getElementById("seconds");
    seconds.style.animationDuration= "10s";
    let hours=document.getElementById("hours");
    hours.style.animationDuration= "120s";
    let minutes=document.getElementById("minutes");
    minutes.style.animationDuration= "44s";
    };

depression.onclick= depressionsun;

function flowsun() {
    sun.style.animationDuration= "0.5s";
    let seconds=document.getElementById("seconds");
    seconds.style.animationDuration= "0.1s";
    let hours=document.getElementById("hours");
    hours.style.animationDuration= "2s";
    let minutes=document.getElementById("minutes");
    minutes.style.animationDuration= "0.8s";
    };

flow.onclick=flowsun; 

nature.onclick=depressionsun;

new TypeIt("#element", {
    speed: 50,
    waitUntilVisible: true,
  }).go();


/*let ADHDcover = document.getElementById("o1")
ADHD.ondragover=ADHDcover.style.display="block";


 var body = document.body;

function ADHDbodycolor() {
    body.style.animationDuration= "3s";
    };

document.getElementById(sun).style.display='block';

function ADHDclock() {
    let seconds=document.getElementById("seconds");
    seconds.style.animationDuration= "1s";
    };

    function ADHD() {
        body.style.animationDuration= "3s";
        }; */ 

