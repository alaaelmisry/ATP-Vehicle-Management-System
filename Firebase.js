// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBS9MASyWBJRCCrPnRS4ENNS14p_7iMvo0",

authDomain: "atp-vehicle-mangment.firebaseapp.com",

projectId: "atp-vehicle-mangment",

storageBucket: "atp-vehicle-mangment.firebasestorage.app",

messagingSenderId: "331419088253",

appId: "1:331419088253:web:b135bfb84924af2ddcc814"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
