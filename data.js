// ==========================
// data.js
// ==========================

const vehicleData = [];

for (let i = 1; i <= 100; i++) {

    vehicleData.push({

        id: i,

        number: "ATP-" + String(i).padStart(3, "0"),

        status: "green",   // green - red - yellow

        driver: "",

        notes: ""

    });

}
