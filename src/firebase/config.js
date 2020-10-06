import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvjp3hXTLyN62NOBLYyeU6Qk_7kYTHFK8",
  authDomain: "ghost-photogallery.firebaseapp.com",
  databaseURL: "https://ghost-photogallery.firebaseio.com",
  projectId: "ghost-photogallery",
  storageBucket: "ghost-photogallery.appspot.com",
  messagingSenderId: "599885227173",
  appId: "1:599885227173:web:794c506b108fff17e0d94c",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const firestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timeStamp };
