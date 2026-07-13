const vehicles = [];


// PRIVATE 30 مركبة

const privateNumbers = [
    "4552",
    "4553",
    "4554",
    "4555",
    "4556",
    "4557",
    "4558",
    "4559",
    "4560",
    "4561",
    "4562",
    "4563",
    "4564",
    "4565",
    "4566",
    "4567",
    "4568",
    "4569",
    "4570",
    "4571",
    "4572",
    "4573",
    "4574",
    "4575",
    "4576",
    "4577",
    "4578",
    "4579",
    "4580",
    "4581"
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
