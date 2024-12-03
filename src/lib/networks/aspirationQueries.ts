// src/lib/networks/aspirationQueries.ts

import { db } from "@/lib/firebase"; 
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore"; 
import { Aspiration } from "@/lib/types/aspirationType"; 

export async function submitAspiration(values: Aspiration): Promise<string> {
  try {
    const { name, email, message } = values;

    const newDocRef = doc(collection(db, "aspirations")); 

    await setDoc(newDocRef, {
      name,
      email,
      message,
      createdAt: serverTimestamp(), 
    });

    console.log("Aspiration submitted successfully!");
    return "success"; 
  } catch (error) {
    console.error("Error submitting aspiration:", error);
    return "error";
  }
}
