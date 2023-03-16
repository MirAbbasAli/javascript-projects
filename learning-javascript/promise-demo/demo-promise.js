
function getTrip(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Let's go to Trip");
        }, 2000);
    });
};

// Resolve a promise
getTrip().then(
    function(futureData){
        console.log(futureData);
    }
)

// Resolve and Reject in a Promise Object
function getTrip(location){
    return new Promise(function(resolve, reject){
        if(location=='ooty'){
            resolve("Trip to "+location);
        } else {
            reject(Error("Some error occured"));
        }
    });
}

// let's call the above function, here promise will be resolved
getTrip("ooty").then(
    function(data){
        console.log(data);
    },
    function(error){
        console.log(error);
    }
);

// In this call, condition will fail and promise will be rejected
getTrip("coorg").then(
    function(data){
        console.log(data);
    },
    function(error){
        console.log(error);
    }
);
// Trip to ooty
// Error: Some error occured

// Promise Chaining in Js
function bookFlight(airline){
    return new Promise(function(resolve, reject){
        if(airline=="AirIndia"){
            setTimeout(resolve(5600),2000);
        } else {
            reject(Error("Flight can not be booked"))
        }
    });
}

function bookHotel(flightPrice){
    return new Promise(function(resolve){
        setTimeout(resolve(7000+flightPrice), 1000);
    });
}

bookFlight("indigo")
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    .catch(e => console.log(e.message));
// We want the bookHotel Promise to be resolved only after the bookFlight Promise is resolved
// and calculate the total price.
function getTotal(){
bookFlight()
    .then(function (flightData){return bookHotel(flightData)})
    .then(function (cumulativeData){console.log("Total is "+cumulativeData)})
}
getTotal();


// Rejected chained promises
bookFlight("indigo")
    .then(function (flightData){return bookHotel(flightData)})
    .then(function (cumulativeData){console.log("Total is "+cumulativeData)})
    .catch(e=>console.log(e.message))
// Flight can not be booked

// We can simplify the promise handling using async await.
async function getTotal(){
    var flightData=await bookFlight();
    var cumulativeData=await bookHotel(flightData);
    console.log("Total is "+cumulativeData);
}
getTotal();

function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
function getTotal(){
bookFlight()
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
}
getTotal()