class Electricity {
    constructor(name) {
        this.turnOn = "Yes",
            this.name = name
    }
    getPower(power) {
        console.log(`Power is ${power} W`)
    }
}


class ElectricityType {
    constructor(name, simple) {
        this.name = name,
            this.type = type
    }
}

ElectricityType.prototype = new Electricity()

const lamp = new ElectricityType('lamp', 'simple');
const PC = new ElectricityType('PC', 'advanced');

lamp.getPower(10);
PC.getPower(150);

console.log(lamp);
console.log(PC);