const privateList = document.getElementById("privateList");
const truckList = document.getElementById("truckList");
const equipmentList = document.getElementById("equipmentList");


const workingCount = document.getElementById("workingCount");
const faultCount = document.getElementById("faultCount");
const absenceCount = document.getElementById("absenceCount");


const search = document.getElementById("search");


const popup = document.getElementById("popup");
const vehicleTitle = document.getElementById("vehicleTitle");

const closeBtn = document.getElementById("closeBtn");





function displayVehicles(list = vehicles){


    privateList.innerHTML="";
    truckList.innerHTML="";
    equipmentList.innerHTML="";


    let working = 0;
    let fault = 0;
    let absence = 0;



    list.forEach(vehicle=>{


        if(vehicle.status==="working")
            working++;

        if(vehicle.status==="fault")
            fault++;

        if(vehicle.status==="absence")
            absence++;




        let card = document.createElement("div");

        card.className="vehicle-card";



        let statusText="";

        let statusClass="";



        if(vehicle.status==="working"){

            statusText="تعمل";
            statusClass="status-working";

        }


        if(vehicle.status==="fault"){

            statusText="عطل";
            statusClass="status-fault";

        }


        if(vehicle.status==="absence"){

            statusText="غياب";
            statusClass="status-absence";

        }




        card.innerHTML=`

        <div class="vehicle-number">
        ${vehicle.number}
        </div>

        <div class="status ${statusClass}">
        ${statusText}
        </div>

        `;



        card.onclick=function(){

            openPopup(vehicle);

        };




        if(vehicle.type==="private"){

            privateList.appendChild(card);

        }



        else if(vehicle.type==="truck"){

            truckList.appendChild(card);

        }



        else if(vehicle.type==="equipment"){

            equipmentList.appendChild(card);

        }



    });



    workingCount.textContent=working;
    faultCount.textContent=fault;
    absenceCount.textContent=absence;



}







function openPopup(vehicle){


    popup.classList.remove("hidden");


    vehicleTitle.textContent =
    "المركبة : " + vehicle.number;


}







closeBtn.onclick=function(){

    popup.classList.add("hidden");

};





search.addEventListener("input",function(){


    let value=this.value.trim();


    let result = vehicles.filter(v=>

        v.number.includes(value)

    );


    displayVehicles(result);



});





displayVehicles();
