const conn = require('./db');

conn.connect((err) => {
    if (err) {
        console.log(err);
    }
});

module.exports = {
    ins_data: (humidity, temperature) => {
        const query = "INSERT INTO sensor_data (humidity, temperature) VALUES (" + humidity + ", " + temperature + ")";
        conn.query(query, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Insertion successful.");
        })
    },
}