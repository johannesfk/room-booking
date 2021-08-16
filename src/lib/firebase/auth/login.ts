import { getAuth, signInWithRedirect } from "firebase/auth";

import provider from "$lib/firebase/auth/config";

const auth = getAuth();
signInWithRedirect(auth, provider);
