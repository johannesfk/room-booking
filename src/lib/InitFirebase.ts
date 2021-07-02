// Firebase App (the core Firebase SDK)
import { initializeApp } from 'firebase/app';

// Add the Firebase products
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

import * as env from '$lib/Env.js';


/* const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
}; */

const firebaseConfig: any = {
    apiKey: env.fc_apiKey,
    authDomain: `${env.fc_projectId}.firebaseapp.com`,
    databaseURL: `https://${env.fc_projectId}.firebaseio.com`,
    projectId: env.fc_projectId,
    storageBucket: `${env.fc_projectId}.appspot.com`,
    messagingSenderId: env.fc_messagingSenderId,
    appId: env.fc_appId,
    measurementId: env.fc_measurementId,
};


const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics();
const auth = getAuth();


// Database offline support
import { enableIndexedDbPersistence } from "firebase/firestore"; 

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully