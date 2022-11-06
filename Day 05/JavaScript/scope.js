// function a(){
//     console.log(b);
// }
// var b = 10;
// a();

// function a(){
//     c()
//     function c(){
//         console.log(b);
//     }
// }
// var b=20;
// a()

// function a(){
//     var b=30;
//     c()
//     function c(){
//         console.log(b);
//     }
// }
// a()

function a(){
    var b=40;
    c()
    function c(){
        console.log(b);
    }
}
console.log(b);
a()