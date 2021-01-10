import {
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID
  } from '@env'

import Firebase from "firebase";

const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGEBUCKET,
    messagingSenderId: MESSAGINGSENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
  };
  
const app = Firebase.initializeApp(firebaseConfig)
export const db = app.database();