import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import config from './../config';

// Initialize Firebase
const app = initializeApp(config.firebase);
const auth = getAuth(app);

export { auth };
