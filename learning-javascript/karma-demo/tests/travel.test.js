// Test suite
describe('TotalTravelFare calculation Suite: ', function(){
    it('Test Case1: Inputs are correct', function(){
        expect(totalTravelFare(1000,20)).toEqual(1200);
    });
    it('Test Case2: Inputs are incorrect', function(){
        expect(totalTravelFare(1000,20)).toEqual(1201);
    });
})
