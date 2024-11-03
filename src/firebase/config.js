// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { v4 } from "uuid";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu4C6BqziPollnfQueS8sPMpACsxr807M",
  authDomain: "trabajo-react-mastroiani.firebaseapp.com",
  projectId: "trabajo-react-mastroiani",
  storageBucket: "trabajo-react-mastroiani.appspot.com",
  messagingSenderId: "255863312468",
  appId: "1:255863312468:web:0212e7e0590ee08e0e9dc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();

export async function UploadFile(file) {
  const storageRef = ref(storage, "productThumbnail/" + v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function AddProduct(newProduct) {
  await addDoc(collection(db, "products"), newProduct);
}
