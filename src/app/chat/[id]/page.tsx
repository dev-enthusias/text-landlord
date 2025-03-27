import { db } from "@/api/firebase.config";
import { getUserId } from "@/lib/actions";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import ChatClient from "./chat-client";
import { ChatMessage } from "@/definition";

export default async function Chat({ params }: { params: { id: string } }) {
  const roomId = params.id;
  if (!roomId) throw new Error("Room ID is undefined!");

  const userId = (await getUserId()) as string;

  // Fetch initial messages
  const messagesRef = collection(db, "rooms", roomId, "messages");
  const snapshot = await getDocs(messagesRef);
  const initialMessages = snapshot.docs.map((doc) => doc.data());

  // Fetch chat partner ID
  const docRef = doc(db, "rooms", roomId);
  const docSnap = await getDoc(docRef);

  let partnerId: string | undefined;
  if (docSnap.exists()) {
    const userIds = docSnap.data().userIds;
    // Validate userIds is an array
    if (!Array.isArray(userIds)) {
      throw new Error("userIds is not an array!");
    }
    partnerId = userIds.find((id) => id !== userId);
  }

  if (partnerId === undefined) throw new Error("Partner ID is undefined!");

  return (
    <ChatClient
      roomId={roomId}
      userId={userId}
      initialMessages={initialMessages as ChatMessage[]}
      partnerId={partnerId}
    />
  );
}
