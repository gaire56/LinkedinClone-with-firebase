import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDe_1-rQX93rnO5wXRomBLhAXeQgbx6H4Y",
    authDomain: "linkedin-clone-8cdaf.firebaseapp.com",
    projectId: "linkedin-clone-8cdaf",
    storageBucket: "linkedin-clone-8cdaf.appspot.com",
    messagingSenderId: "297065579475",
    appId: "1:297065579475:web:1a1fea3893ff7558256526",
    measurementId: "G-QQH0RZMCGR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

