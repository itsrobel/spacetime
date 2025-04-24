// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      googleId?: string; // Add custom fields like Google ID here
    } & DefaultSession["user"];
    accessToken?: string; // Add access token to session
  }

  interface User {
    id: string; // You can also extend the User interface if needed
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    googleId?: string; // Add custom fields to JWT if needed
    accessToken?: string; // Add access token to JWT
  }
}
