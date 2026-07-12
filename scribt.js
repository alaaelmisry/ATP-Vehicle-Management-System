// ==========================
// ATP Vehicle Management
// script.js
// ==========================

// سيتم تحميل بيانات المركبات من data.js
let vehicles = vehicleData;

// عناصر الصفحة
const vehicleList = document.getElementById("vehicleList");
const search = document.getElementById("search");

const popup = document.getElementById("popup");
const vehicleTitle = document.getElementById("vehicleTitle");

const maintenanceBtn = document.getElementById("maintenanceBtn");
const absenceBtn = document.getElementById("absenceBtn");
const detailsBtn = document.getElementById("detailsBtn");
const closeBtn = document.getElementById("closeBtn");

const workingCount = document.getElementById("workingCount");
const faultCount = document.getElementById("faultCount");
const absenceCount = document.getElementById("absenceCount");

let selectedVehicle = null;

// رسم المركبات
function drawVehicles(list) {

    vehicleList.innerHTML = "";

    list.forEach(vehicle => {

        const card = document.createElement("div");

        card.className = "vehicle " + vehicle.status;

        card.innerHTML = vehicle.number;

        card.onclick = function () {

            selectedVehicle = vehicle;

            vehicleTitle.innerHTML = vehicle.number;

            popup.classList.remove("hidden");

        };

        vehicleList.appendChild(card);

    });

    updateCounters();

}

// تحديث العدادات
function updateCounters() {

    let green = 0;
    let red = 0;
    let yellow = 0;

    vehicles.forEach(v => {

        if (v.status == "green") green++;

        if (v.status == "red") red++;

        if (v.status == "yellow") yellow++;

    });

    workingCount.innerHTML = green;
    faultCount.innerHTML = red;
    absenceCount.innerHTML = yellow;

}

// البحث
search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let result = vehicles.filter(v =>
        v.number.toLowerCase().includes(value)
    );

    drawVehicles(result);

});

// طلب صيانة
maintenanceBtn.onclick = function () {

    if (!selectedVehicle) return;

    selectedVehicle.status = "red";

    popup.classList.add("hidden");

    drawVehicles(vehicles);

};

// إشعار غياب
absenceBtn.onclick = function () {

    if (!selectedVehicle) return;

    selectedVehicle.status = "yellow";

    popup.classList.add("hidden");

    drawVehicles(vehicles);

};

// التفاصيل
detailsBtn.onclick = function () {

    if (!selectedVehicle) return;

    alert(
        "رقم المركبة : " + selectedVehicle.number +
        "\n\nالحالة : " + selectedVehicle.status
    );

};

// إغلاق النافذة
closeBtn.onclick = function () {

    popup.classList.add("hidden");

};

// إغلاق عند الضغط خارج النافذة
popup.onclick = function (e) {

    if (e.target == popup) {

        popup.classList.add("hidden");

    }

};

// بدء التشغيل
drawVehicles(vehicles);
