"use client";

import { db, storage } from "@/api/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { LucideSendHorizontal, LucideImage, LucideX } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function ChatFooter({
  roomId,
  userId,
}: {
  roomId: string;
  userId: string;
}) {
  const [messageText, setMessageText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image before upload
    }
  }

  function removeImage() {
    setImageFile(null);
    setImagePreview(null);
  }

  async function sendMessage() {
    if (!messageText.trim() && !imageFile) {
      toast.error("Please enter a message or select an image.");
      return;
    }

    setIsSending(true);

    console.log(imageFile);

    try {
      const messagesRef = collection(db, "rooms", roomId, "messages");
      let imageUrl = null;

      if (imageFile) {
        // Upload image to Firebase Storage
        const imageRef = ref(
          storage,
          `messages/${roomId}/${uuidv4()}-${imageFile.name}`,
        );
        const snapshot = await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
        console.log(imageUrl);
      }

      // Send message to Firestore
      const newMessage = {
        id: uuidv4(),
        author: { id: userId },
        text: messageText,
        createdAt: Date.now(),
        status: "sent",
        type: imageFile ? "image" : "text",
      };

      const newMessageImage = {
        id: uuidv4(),
        author: { id: userId },
        createdAt: Date.now(),
        height: 1080,
        width: 1080,
        metadata: {
          base64image: imageUrl,
        },
        name: imageFile?.name,
        size: imageFile?.size,
        status: "sent",
        type: imageFile ? "image" : "text",
      };

      const uploadedMessageData = imageFile ? newMessageImage : newMessage;

      await addDoc(messagesRef, uploadedMessageData);

      // Reset fields after sending
      setMessageText("");
      setImageFile(null);
      setImagePreview(null);
      setShowEmojiPicker(false);
      toast.success("Message sent!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <footer className="relative flex gap-x-3 bg-gold/10 px-4 py-4 lg:gap-x-7 lg:px-7">
      {/* Emoji Picker Button */}
      <button
        type="button"
        className="text-2xl"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        🙂
      </button>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-14 left-4 z-10">
          <EmojiPicker
            onEmojiClick={(emojiObject) => {
              setMessageText((prev) => prev + emojiObject.emoji);
              setShowEmojiPicker(false);
            }}
            width={290}
          />
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        {/* Image Upload Button */}
        <label htmlFor="fileInput" className="cursor-pointer">
          <LucideImage className="text-gold" size={26} />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        {/* Image Preview */}
        {imagePreview && (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Selected"
              className="h-12 w-12 rounded-lg object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white"
            >
              <LucideX size={14} />
            </button>

            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold"
              disabled={isSending}
            >
              <LucideSendHorizontal className="text-[#130F26]" />
            </button>
          </div>
        )}
      </form>

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
