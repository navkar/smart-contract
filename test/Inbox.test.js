const assert = require('assert');
const ganache = require('ganache-cli');
// construction function
const Web3 = require('web3');
// web3 = instance
const web3 = new Web3(ganache.provider());
// Mocha - Testing Framework 


class Car {
    park(){
        return 'parked';
    }

    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car = new Car();
});

describe('Naveen-Car' ,() => {

    it('can park', () => {
        assert.strictEqual(car.park(), 'parked');
        //assert.strictEqual(car.park(), 'stopped');
    });

    it('can drive', () => {
        assert.strictEqual(car.drive(), 'vroom');
        //assert.strictEqual(car.park(), 'stopped');
    });

});
