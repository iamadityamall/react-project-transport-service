import { db } from "../components/firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const clientCollectionRef = collection(db, "client");

class ClientDataService {
  addClient = (newClient) => {
    return addDoc(clientCollectionRef, newClient);
  };
  getAllClients = () => {
    return getDocs(clientCollectionRef);
  };
  deleteClient = (id) => {
    const clientDoc = doc(db, "client", id);
    return deleteDoc(clientDoc);
  };
}

export default new ClientDataService();
