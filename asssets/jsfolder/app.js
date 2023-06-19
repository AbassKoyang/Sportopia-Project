

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnZ0qug_LKvohSF4dQFoAn9fclXksaoc",
  authDomain: "sportopia-bdb8b.firebaseapp.com",
  projectId: "sportopia-bdb8b",
  storageBucket: "sportopia-bdb8b.appspot.com",
  messagingSenderId: "143094806217",
  appId: "1:143094806217:web:02aa53fbc124bc7477ff18"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();


// Function For SignUP
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click", (e) =>{
e.preventDefault()
console.log("signup-click")

var email = document.getElementById("inputEmail") 
var password = document.getElementById("inputPassword") 

auth
.createUserWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
    location.reload()
    // user signed in
var user = userCredential.user;
console.log("user, user.mail");
window.location = "social.html";
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
console.log("error code", errorCode);
console.log("error message", errorMessage);
alert("error code", errorCode);
alert("error message", errorMessage);
})

});

