import axios from "axios";
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

    const fcmToken = await getToken(messaging, {
      vapidKey:
        "BGPenWZm9JPSIvnhcfToxGDClxHIQ75cEvUDRVRnxdXORMM0nlkKuI6AL4UyMjZJ_uPmHShZSQLDqBYVgPc0iFo",
    });

    const userToken = localStorage.getItem("token");

    await axios.post(
      `${process.env.REACT_APP_API_URL}user/token`,
      { fcmToken },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    return fcmToken;
  } catch (error) {}
};
