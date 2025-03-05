"use client";

import { db, storage } from "@/api/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { LucideSendHorizontal } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

export default function ChatFooter({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) {
  const [messageText, setMessageText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);

  async function sendMessage() {
    // Check for empty message or selected image
    if (!messageText.trim() && !imageFile) {
      toast.error("Please enter a message or select an image.");
      return;
    }

    // Validate the message text to allow only string text
    if (typeof messageText !== "string") {
      toast.error("Invalid message type. Please enter a string.");
      return;
    }

    setIsSending(true);

    try {
      const messagesRef = collection(db, "rooms", roomId, "messages");

      let imageUrl = null;

      // If an image is selected, upload it to Firebase Storage
      if (imageFile) {
        const imageRef = ref(
          storage,
          `messages/${roomId}/${Date.now()}-${imageFile.name}`,
        );
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Prepare message object
      const newMessage = {
        id: uuidv4(),
        author: { id: userId },
        text: messageText,
        // imageUrl,
        createdAt: serverTimestamp(),
        status: "sent",
        type: imageFile ? "image" : "text",
      };

      // Add message to Firestore
      await addDoc(messagesRef, newMessage);

      // Reset input fields
      setMessageText("");
      setImageFile(null);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <footer className="flex gap-x-3 bg-gold/10 px-4 py-4 lg:gap-x-7 lg:px-7">
      <button type="button" className="text-2xl">
        🙂
      </button>
      <button type="button">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3511 10.5486V19.4365"
            stroke="#E29A13"
            strokeWidth="1.81971"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.8026 14.9925H10.9062"
            stroke="#E29A13"
            strokeWidth="1.81971"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0346 2.87268H9.66574C5.7028 2.87268 3.21875 5.67757 3.21875 9.64827V20.3599C3.21875 24.3306 5.69125 27.1355 9.66574 27.1355H21.0346C25.0091 27.1355 27.4816 24.3306 27.4816 20.3599V9.64827C27.4816 5.67757 25.0091 2.87268 21.0346 2.87268Z"
            stroke="#130F26"
            strokeWidth="1.81971"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="flex w-full gap-x-3"
      >
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="custom-shadow-sm w-full rounded-lg border-b-2 border-b-transparent bg-white px-4 py-2.5 text-sm text-black focus:border-b-gold focus:outline-none"
          placeholder="Type your message"
          disabled={isSending}
        />

        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold"
          disabled={isSending}
        >
          <LucideSendHorizontal className="text-[#130F26]" />
        </button>
      </form>
    </footer>
  );
}
