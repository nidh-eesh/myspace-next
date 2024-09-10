import NextAuth, { type Session, type User } from "next-auth";
import GitHub from "next-auth/providers/github";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [GitHub]
});
