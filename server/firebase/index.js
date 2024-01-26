'use sctrict';

const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY)),
  projectId: process.env.PROJECT_ID,
});

module.exports = firebase;
