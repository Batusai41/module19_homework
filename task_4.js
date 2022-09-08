function Electricity (name) {
    this.turnOn = "Yes",
    this.name = name
}

Electricity.prototype.getPower = function(power) {
    console.log(`Power is ${power} W`)
}

function Electricity(name, simple) {
    this.name = name,
    this.simple = simple,
    this.advanced = advanced
}

Electricity.prototype = new Electricity()

const lamp = new ElectricityType('lamp', 'simple');
const PC = new ElectricityType('PC', 'advanced');

lamp.getPower(10);
PC.getPower(150);

console.log(lamp);
console.log(PC);