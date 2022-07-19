import firebase from "firebase"; 

const firebaseConfig = {
  apiKey: "AIzaSyC8BLnlEP_vjwgPVQ5wmeml1-DKisGPZ44",
  authDomain: "netflix-clone-30ab9.firebaseapp.com",
  projectId: "netflix-clone-30ab9",
  storageBucket: "netflix-clone-30ab9.appspot.com",
  messagingSenderId: "548550535666",
  appId: "1:548550535666:web:91bf616dd07d90bb88e36b",
};


const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}