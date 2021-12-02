import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvc4CS0jnxgSsbg9NPVUsr6BxhwfWvMF4",
    authDomain: "ecommerce-coderhouse-7c131.firebaseapp.com",
    projectId: "ecommerce-coderhouse-7c131",
    storageBucket: "ecommerce-coderhouse-7c131.appspot.com",
    messagingSenderId: "567538955921",
    appId: "1:567538955921:web:ad9db33b57edf637b4b130"
  };

  const app = firebase.initializeApp(firebaseConfig);

  //Agregando nuestras funciones
  export function getFirestore(){
      return firebase.firestore(app)
  }