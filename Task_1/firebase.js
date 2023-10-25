// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvvRzeShO6Qo9wFaoTC1NFBe5fNt3REWs",
    authDomain: "signup-form-1e475.firebaseapp.com",
    projectId: "signup-form-1e475",
    storageBucket: "signup-form-1e475.appspot.com",
    messagingSenderId: "780379869854",
    appId: "1:780379869854:web:239c37759a5b3264f7a18f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getDatabase();

console.log(app)



// login form using database
loginBtn.addEventListener("click", (e) => {


    let email = document.getElementById('lemail').value
    let password = document.getElementById('lpassword').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential)
            // ...

            let lgDate = new Date();

            update(ref(database, 'users/' + user.uid), {
                last_login: lgDate,

            })
                .then(() => {
                    // Data saved successfully!
                    Swal.fire({
                        icon: 'success',
                        title: 'successfully',
                        text: 'Login successfully!',

                    })



                    setTimeout(function () {
                        window.location.replace("index.html");
                    }, 3000)





                })
                .catch((error) => {
                    // The write failed...
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })

                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter details correctly!',

            })
            // alert(error)
            // alert(errorMessage)
        });


})



// register user
signupBtn.addEventListener("click", (e) => {

    let name = document.getElementById('uname').value
    let email = document.getElementById('uemail').value
    let password = document.getElementById('upassword').value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...

            set(ref(database, 'users/' + user.uid), {
                name: name,
                email: email,
                password: password,

            })
                .then(() => {
                    // Data saved successfully!


                    Swal.fire({
                        icon: 'success',
                        title: 'successfully',
                        text: 'Account Create successfully!',

                    })

                    setTimeout(function () {
                        location.reload()
                    }, 3000)


                })
                .catch(() => {
                    // The write failed...
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',

                    })
                });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter details correctly!',

            })
        });


})


