import { db } from "@/api/firebase.config";
import { getUserId } from "@/lib/actions";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import ChatClient from "./chat-client";
import { ChatMessage } from "@/definition";

export default async function Chat({ params }: { params: { id: string } }) {
  const roomId = params.id;
  const userId = (await getUserId()) as string;

  // Fetch initial messages
  const messagesRef = collection(db, "rooms", roomId, "messages");
  const snapshot = await getDocs(messagesRef);
  const initialMessages = snapshot.docs.map((doc) => doc.data());

  // Fetch chat partner details
  const docRef = doc(db, "rooms", roomId);
  const docSnap = await getDoc(docRef);
  let chatPartner = null;

  if (docSnap.exists()) {
    const [partnerId] = docSnap
      .data()
      .userIds.filter((id: string) => id !== userId);
    const userDocRef = doc(db, "users", partnerId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      chatPartner = userDocSnap.data();
    }
  }

  return (
    <ChatClient
      roomId={roomId}
      userId={userId}
      initialMessages={initialMessages as ChatMessage[]}
      chatPartner={chatPartner}
    />
  );
}
