import { writable } from "svelte/store";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();

import type firebase from "firebase/app";

const authStore = writable<{
    loggedIn: boolean,
    firebaseController: boolean
}>();


const provider = new GoogleAuthProvider();