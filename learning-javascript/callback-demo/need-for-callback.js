
let value;
function check(val){
    console.log(val);
}

function getTrip(callback){
    setTimeout(function (){
        value="Let's go to Trip";
        callback(value)
    }, 1500);
}
getTrip(check); // check() function is passed as callback; After 3s, Let's go to Trip
/*
// Example
function display(){
    console.log("Let's go to Trip");
}
setTimeout(display, 3000); // after 3s: Let's go to Trip
*/