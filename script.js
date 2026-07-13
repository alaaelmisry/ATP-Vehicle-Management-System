const privateList = document.getElementById("privateList");
const truckList = document.getElementById("truckList");
const equipmentList = document.getElementById("equipmentList");


const workingCount = document.getElementById("workingCount");
const faultCount = document.getElementById("faultCount");
const absenceCount = document.getElementById("absenceCount");


const search = document.getElementById("search");


const popup = document.getElementById("popup");
const vehicleTitle = document.getElementById("vehicleTitle");


const passwordPopup = document.getElementById("passwordPopup");
const passwordInput = document.getElementById("passwordInput");



let selectedVehicle = null;

let requestedStatus = null;



// عرض المركبات

function displayVehicles(list = vehicles){


    privateList.innerHTML="";
    truckList.innerHTML="";
    equipmentList.innerHTML="";


    let working = 0;
    let fault = 0;
    let absence = 0;



    list.forEach(vehicle => {



        if(vehicle.status==="working")
            working++;


        if(vehicle.status==="fault")
            fault++;


        if(vehicle.status==="absence")
            absence++;




        let card=document.createElement("div");


        card.className="vehicle-card";



        let statusText="";
        let statusClass="";



        if(vehicle.status==="working"){

            statusText="تعمل";
            statusClass="status-working";

        }



        else if(vehicle.status==="fault"){

            statusText="لا تعمل";
            statusClass="status-fault";

        }



        else if(vehicle.status==="absence"){

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

<div class="vehicle-notes">
${vehicle.notes ? "📝 " + vehicle.notes : ""}
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







// فتح تفاصيل المركبة

function openPopup(vehicle){


    selectedVehicle = vehicle;


    vehicleTitle.textContent =
    "المركبة : " + vehicle.number;


    popup.classList.remove("hidden");


}






// طلب تغيير الحالة

function requestStatusChange(status){


    requestedStatus=status;


    passwordInput.value="";


    passwordPopup.classList.remove("hidden");


}

function editNotes(){

    let note = prompt(
        "أدخل الملاحظة:",
        selectedVehicle.notes || ""
    );

    if(note !== null){

        selectedVehicle.notes = note;

        displayVehicles();

        popup.classList.add("hidden");

    }

}






// فحص الرقم السري

function checkPassword(){


    if(passwordInput.value==="16996"){



        selectedVehicle.status=requestedStatus;




        let record={


            vehicle:selectedVehicle.number,


            status:requestedStatus,


            date:new Date().toLocaleDateString("ar-SA"),


            time:new Date().toLocaleTimeString("ar-SA")


        };



        console.log("تم تعديل الحالة:",record);



        displayVehicles();



        passwordPopup.classList.add("hidden");


        popup.classList.add("hidden");



    }


    else{


        alert("❌ الرقم السري غير صحيح");


    }



}








// إغلاق نافذة المركبة

function closeVehiclePopup(){


    popup.classList.add("hidden");


}






// إلغاء الرقم السري

function closePassword(){


    passwordPopup.classList.add("hidden");


}







// البحث

search.addEventListener("input",function(){


    let value=this.value.trim();



    let result=vehicles.filter(vehicle=>


        vehicle.number.includes(value)


    );



    displayVehicles(result);



});







// تشغيل النظام

displayVehicles();
