// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmR4_d4guQNga2hyK3JEg-aLpU4mYoj3A",
    authDomain: "classtest-6cc8b.firebaseapp.com",
    projectId: "classtest-6cc8b",
    storageBucket: "classtest-6cc8b.appspot.com",
    messagingSenderId: "335356662121",
    appId: "1:335356662121:web:b4887964717c24e8ba2df8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
 user_name = document.getElementById("user_name").value;  
 firebase.database().ref("/").child(user_name).update({
 purpose : "adding user"    
 });   
  }
