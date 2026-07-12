const vehicles = [];


// PRIVATE 30 مركبة

for(let i=1; i<=30; i++){

    vehicles.push({

        id:i,

        number:"P-" + String(i).padStart(3,"0"),

        type:"private",

        status:"working"

    });

}




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
