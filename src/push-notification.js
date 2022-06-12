import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

export const initializeFirebase = () => {
  initializeApp({
    apiKey: "AIzaSyBazGT76I-Zl3YKAtkEuq4kNoj7MXKTpcc",
    authDomain: "amazing-notes-fe460.firebaseapp.com",
    projectId: "amazing-notes-fe460",
    storageBucket: "amazing-notes-fe460.appspot.com",
    messagingSenderId: "943544956811",
    appId: "1:943544956811:web:cafdfe38167ee664f2a18e",
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    await Notification.requestPermission();
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey:
        "BGPenWZm9JPSIvnhcfToxGDClxHIQ75cEvUDRVRnxdXORMM0nlkKuI6AL4UyMjZJ_uPmHShZSQLDqBYVgPc0iFo",
    });
    // console.log("Your token is:", token);

    return token;
  } catch (error) {
    // console.error(error);
  }
};
