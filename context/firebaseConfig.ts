import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    initializeFirestore,
    setLogLevel,
    updateDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const { getReactNativePersistence } = require('firebase/auth') as any;

const firebaseConfig = {
    apiKey: 'AIzaSyDWb-85lpwRm_ik5q0stZcG8jSd8rflzp0',
    authDomain: 'coffeshop-e1561.firebaseapp.com',
    projectId: 'coffeshop-e1561',
    storageBucket: 'coffeshop-e1561.firebasestorage.app',
    messagingSenderId: '844875358429',
    appId: '1:844875358429:web:a436202ef5c2aac2213b34',
    measurementId: 'G-S788ME3M2D',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = initializeFirestore(app, { experimentalForceLongPolling: true });
setLogLevel('error');

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

const storage = getStorage(app);

export {
    addDoc, auth, collection, db, deleteDoc, doc, getDocs, storage, updateDoc
};

