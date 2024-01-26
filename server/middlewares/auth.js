'use strict';

const firebase = require('./../firebase');

exports.checkAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new Error('You are not signed in! Please sign in to get access.'));
  }

  try {
    await firebase.auth().verifyIdToken(token);
  } catch (e) {
    return next(new Error('Token is invalid! Please sign in to get access.'));
  }

  next();
}
