import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB5Z4HxuNNWzylnboF-R0hmHV6kQquwf8w",
  authDomain: "idobatakaigi-with-ham-8ec6b.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-8ec6b",
  storageBucket: "idobatakaigi-with-ham-8ec6b.appspot.com",
  messagingSenderId: "224820861974",
  appId: "1:224820861974:web:69021d4f1711a745caa937"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');
 
export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
}