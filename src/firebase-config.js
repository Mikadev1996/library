/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCITpVD4-Ea3TZUDC_yTCSYXmqrmyV7l7w",
  authDomain: "js-library-8d8c1.firebaseapp.com",
  databaseURL: "https://js-library-8d8c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "js-library-8d8c1",
  storageBucket: "js-library-8d8c1.appspot.com",
  messagingSenderId: "181312626953",
  appId: "1:181312626953:web:8d1dd83edd5029bc70b3d8"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}