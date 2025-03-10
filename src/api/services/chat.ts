import {
  collection,
  doc,
  getDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, storage } from "../firebase.config";
import { getUserId } from "@/lib/actions";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export const getAllChatLists = async (setChatLists: (chats: any[]) => void) => {
  const id = (await getUserId()) as string;
  const q = query(
    collection(db, "rooms"),
    where("userIds", "array-contains", id),
  );

  const unsubscribe = onSnapshot(q, async (querySnapshot) => {
    const users: any[] = []; // Array to store user data

    for (const snap of querySnapshot.docs) {
      const [user] = snap
        .data()
        .userIds.filter((userId: string) => userId !== id);

      const userDocRef = doc(db, "users", user);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = { ...userDoc.data(), ...snap.data() };
        userData.roomId = snap.id;
        users.push(userData);
      }
    }

    setChatLists(users); // Update the state with the latest messages
  });

  return unsubscribe; // Return the unsubscribe function to stop listening
};

export const upload = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      if (event.target && event.target.result) {
        // Get the base64 string
        const base64String = event.target.result as string;

        const date = new Date();
        const filename = `images/${date + file.name}.base64`;
        const storageRef = ref(storage, filename);

        try {
          // Upload the base64 string as text content to Firebase
          const uploadTask = await uploadString(
            storageRef,
            base64String,
            "data_url",
          );

          // Get the download URL for the base64 string
          const downloadURL = await getDownloadURL(uploadTask.ref);
          resolve(downloadURL);
        } catch (error) {
          reject("Failed to upload base64 string: " + error);
        }
      } else {
        reject("Failed to convert file to base64");
      }
    };

    reader.onerror = (error) => {
      reject("Error reading file: " + error);
    };

    // Convert file to base64
    reader.readAsDataURL(file);
  });
};
