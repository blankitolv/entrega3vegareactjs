import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyBqEWrCnxd_PgzzA94w9MO47xiPTRB393Q",
     authDomain: "editorialintelectos-333f5.firebaseapp.com",
     projectId: "editorialintelectos-333f5",
     storageBucket: "editorialintelectos-333f5.appspot.com",
     messagingSenderId: "1062134824992",
     appId: "1:1062134824992:web:1cf0a1e203ca024087fc45"
};

const app = firebase.initializeApp(firebaseConfig);

// agregamos nuestras modificaciones/funciones/metodos
export function getFireStore(){
     return firebase.firestore(app);
}
