import {
  collection,
  doc,
  getDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import { getUserId } from "@/lib/actions";

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
