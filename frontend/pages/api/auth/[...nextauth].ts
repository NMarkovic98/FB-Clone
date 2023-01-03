import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
const { FACEBOOK_CLIENT_ID = '', FACEBOOK_CLIENT_SECRET = '' } = process.env;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
