import { GoogleAuthProvider } from "firebase/auth";
// Config
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/calendar.events');
provider.setCustomParameters({
    'login_hint': 'firstname.lastname@efcstudent.com'
});