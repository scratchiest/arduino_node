const SerialPort = require('serialport');
const func = require('./func');

let dataString;
let resString;

const port = new SerialPort("COM7", {
    baudRate: 9600,
});

port.on("open", () => {
    port.on('data', (data) => {
        dataString = data.toString();
        resString = dataString.split(',');
        func.ins_data(resString[0], resString[1]);
    });
});