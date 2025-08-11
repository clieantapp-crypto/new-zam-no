// lib/firebase.ts
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDJ-0cptQFiTZNKOD3YrHmHIjVN9Rk1jSs",
  authDomain: "clinte-25027.firebaseapp.com",
  databaseURL: "https://clinte-25027-default-rtdb.firebaseio.com",
  projectId: "clinte-25027",
  storageBucket: "clinte-25027.firebasestorage.app",
  messagingSenderId: "164388154350",
  appId: "1:164388154350:web:33d2bc724edfe4e0dc3cff",
  measurementId: "G-XJVRTMJHEV"
};

// Prevent re-initialization in dev / Fast Refresh
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const database = getDatabase(app);
export default app;

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);

    await setDoc(docRef, {...data,createdDate:new Date().toISOString()},{merge:true});

    console.log('Document written with ID: ', docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error('Error adding document: ', e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' },
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
