import { Account, NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import emailLogin from "./actions/email_login/emailLogin";
import googleLogin from "./actions/google_login/googleLogin";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const {email, password} = credentials as any;

              const user = await emailLogin(email, password);

              if (user) {
                return user.user;
              } else {
                return null;
              }
            }
        }),

        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

        })
    ],

    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: "/login"
    },

    callbacks: {
      async signIn({ account, user, credentials }: { user: AdapterUser | User, account: Account | null, credentials?: Record<string, any> | undefined, }) {
        if (account?.provider === "google") {

          const googleUser = await googleLogin(user?.name as string, user?.email as string);

          return googleUser;

      
        } else if (account?.provider === "credentials") {

          const {email, password} = credentials as any;

          const user = await emailLogin(email, password);

          if (user) {
            return user.user;
          } else {
            return null;
          }
          
        }

        return null;
      },
      async jwt({ user, token }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user as any;
        return session;
      },
    }
}
