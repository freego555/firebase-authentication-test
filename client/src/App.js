import { useState } from 'react';
import { signInWithPopup, signOut, GoogleAuthProvider } from '@firebase/auth';
import { auth } from './firebase';
import config from './config';
import './App.css';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [hello, setHello] = useState('');

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      sessionStorage.setItem('accessToken', credential?.accessToken);

      // Get ID Token
      const idToken = await auth?.currentUser?.getIdToken(true);
      sessionStorage.setItem('idToken', idToken);

      setUserEmail(result.user?.email);
    } catch (err) {
      // Handle Errors here.
      const errorCode = err.code;
      const errorMessage = err.message;
      // The email of the user's account used.
      const email = err.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(err);

      console.error({ errorCode, errorMessage, email, credential });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem('idToken');
      setUserEmail('');
    } catch (err) {
      console.error(err);
    }
  }

  const getHelloWorld = async () => {
    const accessToken = sessionStorage.getItem('accessToken') || '';
    const idToken = sessionStorage.getItem('idToken') || '';

    try {
      const response = await fetch(`${config.backendUrl}/api/hello`, {
        headers: {
          'Authorization': `Bearer ${idToken}`,
        },
      });
      const result = await response.text();
      
      setHello(result);
    } catch (err) {
      setHello(err.message);
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div>{userEmail}</div><br />
      <button onClick={handleSignIn}>Sign In</button><br />
      <br />
      <button onClick={handleSignOut}>Sign Out</button><br />
      <br />
      <div>{hello}</div><br />
      <button onClick={getHelloWorld}>
        Get Restricted Hello World from Backend
      </button>
    </div>
  );
}

export default App;
