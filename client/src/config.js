const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
  firebase: {
    // Your web app's Firebase configuration here
    // See https://firebase.google.com/docs/web/setup#add-sdks-initialize
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'API_KEY',
    authDomain:
      process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
      'PROJECT_ID.firebaseapp.com',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'PROJECT_ID',
    storageBucket:
      process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'PROJECT_ID.appspot.com',
    messagingSenderId:
      process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
      'MESSAGING_SENDER_ID',
    appId: process.env.REACT_APP_FIREBASE_APP_ID || 'APP_ID',
    measurementId:
      process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || 'G-MEASUREMENT_ID',
  },
};

export default config;
