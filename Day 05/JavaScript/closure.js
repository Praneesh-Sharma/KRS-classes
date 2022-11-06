// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). In other words,
// a closure gives you access to an outer function's scope from an inner function.

// function x(){
//     var a=7;
//     function y(){
//         console.log(a); //7
//     }
//     // y();
//     return y
// }
// x()
// var z=x()
// console.log(z)
// z()

a()
blur()
setTimeout(c, 500) //in milliseconds, setInterval is a callback function
function a(){
    console.log("a");
}
function blur(){
    console.log("b");
}
function c(){
    console.log("c");
}