// Import the function halfof from the lib.js module
//import {halfof, multply } from "./lib";
//console.log("half of:" + halfof(84));
//confirm.log("multply : " + multply(84,2));

// doSomgthing example
//import doSomgthing from '/lib.js';

//doSomgthing();

import {flag, touch } from "./validor.js";
console.log(flag);//false
touch(); // change to true
console.log(flag); //true
flag = false; //change to false
console.log(flag); //error