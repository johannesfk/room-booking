import firebaseConfig from '$lib/env';

export async function initFirebase() {
	if (typeof window !== 'undefined') {
		const fb: any = (await import("firebase/app"));
		await import("firebase/auth");
		await import("firebase/firestore");
		fb.initializeApp(firebaseConfig);
		return;
	}

	/* const fb: any = await import("firebase/app");
		fb.initializeApp(firebaseConfig);
		return; */
}













/*
// Firebase App (the core Firebase SDK)
import { initializeApp } from 'firebase/app';

// Add the Firebase products
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// import { variables } from '$lib/env';

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

/* export const firebaseConfig: any = {
	apiKey: variables.fc_apiKey,
	authDomain: `${variables.fc_projectId}.firebaseapp.com`,
	databaseURL: `https://${variables.fc_projectId}.firebaseio.com`,
	projectId: variables.fc_projectId,
	storageBucket: `${variables.fc_projectId}.appspot.com`,
	messagingSenderId: variables.fc_messagingSenderId,
	appId: variables.fc_appId,
	measurementId: variables.fc_measurementId
}; */

/* export const firebaseConfig = {
	apiKey: "AIzaSyB9N9rV3ByWKgxPTdA66N0llDD6ZoWW3AE",
	authDomain: "room-booking-a2d9c.firebaseapp.com",
	projectId: "room-booking-a2d9c",
	storageBucket: "room-booking-a2d9c.appspot.com",
	messagingSenderId: "790606997060",
	appId: "1:790606997060:web:843ece84380e6a24377e11",
	measurementId: "G-7179J05XFS"
}; */
/*
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics();
const auth = getAuth();

// Database offline support
import { enableIndexedDbPersistence } from 'firebase/firestore';

enableIndexedDbPersistence(db).catch((err) => {
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
*/