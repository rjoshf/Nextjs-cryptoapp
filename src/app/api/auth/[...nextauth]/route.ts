import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../../../lib/db';
import { verifyPassword } from '../../../../../lib/auth';
import { DefaultSession } from 'next-auth';

// Extend the User model
declare module "next-auth" {
  interface User {
    ethereum_amount?: number;
    bitcoin_amount?: number;
  }
  // Extend the Session model
  interface Session {
    user: {
      ethereum_amount?: number;
      bitcoin_amount?: number;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Credentials are not complete');
        }

        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();

        return {
          id: user._id.toString(),
          email: user.email,
          ethereum_amount: user.ethereum_amount,
          bitcoin_amount: user.bitcoin_amount,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {

      if (trigger === "update" && session?.bitcoin_amount) {
        token.bitcoin_amount = session.bitcoin_amount
      }

      if (trigger === "update" && session?.ethereum_amount) {
        token.ethereum_amount = session.ethereum_amount
      }

      if (user) {
        return {
          ...token,
          id: user.id,
          ethereum_amount: user.ethereum_amount,
          bitcoin_amount: user.bitcoin_amount,
        };
      }
      return token;
    },
    async session({ session, token }) {
      
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          ethereum_amount: token.ethereum_amount,
          bitcoin_amount: token.bitcoin_amount,
        }
      }
    },
  },
};

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}