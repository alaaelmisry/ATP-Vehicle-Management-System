const vehicles = [];


// PRIVATE 30 مركبة

const privateNumbers = [
    "4552",
    "4553",
    "4554",
    "4556",
    "4557",
    "4558",
    "4559",
    "2924",
    "2932",
    "2950",
    "4676",
    "4677",
    "2062",
    "2087",
    "6031",
    "6032",
    "6033",
    "3162",
];

privateNumbers.forEach((number, index) => {

    vehicles.push({

        id: index + 1,

        number: number,

        type: "private",

        status: "working"

    });

});




// TRUCKS 35 شاحنة

for(let i=1; i<=35; i++){

    vehicles.push({

        id:30+i,

        number:"T-" + String(i).padStart(3,"0"),

        type:"truck",

        status:"working"

    });

}




// EQUIPMENTS 35 معدة

for(let i=1; i<=35; i++){

    vehicles.push({

        id:65+i,

        number:"EQ-" + String(i).padStart(3,"0"),

        type:"equipment",

        status:"working"

    });

}
