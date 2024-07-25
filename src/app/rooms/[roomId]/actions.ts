"use server";
import { StreamChat } from "stream-chat";
import { getSession } from "@/lib/auth";

export async function generateTokenAction(userId: string) {
  //   const session = await getSession();

  //   if (!session) {
  //     throw new Error("No session found");
  //   }
  const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;

  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  const token = serverClient.createToken(userId);
  return token;
}
