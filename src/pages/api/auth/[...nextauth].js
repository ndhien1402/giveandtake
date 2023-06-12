import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "lib/api/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await signIn(credentials);
          if (user) {
            return user;
          }
        } catch (error) {
          throw new Error(
            error.response?.data?.message ||
              error.response?.data ||
              error.response
          );
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      console.log("session", session);
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
