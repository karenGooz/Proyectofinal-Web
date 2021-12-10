import React from "react";
import firebase from "firebase/app"
import "firebase/auth"

export default function Login() {
    return <h2>Login</h2>;
    const firebaseConfig = {
        apiKey: "AIzaSyA5BbJNWY5euwzMj_LiRQZjk3Ip2V2w8Dg",
        authDomain: "proyecto-final-web-a3e17.firebaseapp.com",
        projectId: "proyecto-final-web-a3e17",
        storageBucket: "proyecto-final-web-a3e17.appspot.com",
        messagingSenderId: "744703315767",
        appId: "1:744703315767:web:b2bde8883d75e85a0c14b2"
    };
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    
    const buttonGoogle = document.querySelector('#btnLogin')
    buttonGoogle.addEventListener('click', () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(result => {
            console.log('Accediendo')
        })
        .catch(err =>{
            console.log(err)
        })
            
    })
    firebase.initializeApp(firebaseConfig);
}

