function totalTravelFare(baseFare, taxPercentage){
    var finalFare;
    finalFare=baseFare*(1+taxPercentage/100);
    return finalFare;
}