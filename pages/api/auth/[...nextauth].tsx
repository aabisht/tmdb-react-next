import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: "test",
  jwt: {
    secret: "tmdb",
    maxAge: Number("3600"),
  },
  session: {
    maxAge: Number("3600"),
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      /* eslint-disable @typescript-eslint/no-unused-vars */
      async authorize(credentials, req) {
        const resRequestToken = await fetch(
          "https://api.themoviedb.org/3/authentication/token/new?api_key=fa5754e1deb4b7b86e1d8146ec1e428e",
        );

        const requestToken = await resRequestToken.json();

        if (requestToken?.success === true) {
          const resSession = await fetch(
            "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=fa5754e1deb4b7b86e1d8146ec1e428e",
            {
              method: "POST",
              headers: { "content-type": "application/json;charset=utf-8" },
              body: JSON.stringify({
                username: credentials?.username as string,
                password: credentials?.password as string,
                request_token: requestToken.request_token,
              }),
            },
          );

          const requestSession = await resSession.json();

          if (requestSession?.success === true) {
            const resSessionId = await fetch(
              "https://api.themoviedb.org/3/authentication/session/new?api_key=fa5754e1deb4b7b86e1d8146ec1e428e",
              {
                method: "POST",
                headers: { "content-type": "application/json;charset=utf-8" },
                body: JSON.stringify({
                  request_token: requestSession.request_token,
                }),
              },
            );

            const requestSessionID = await resSessionId.json();

            if (requestSessionID?.success) {
              return requestSessionID.session_id;
            }
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    /* eslint-disable @typescript-eslint/no-unused-vars */
    async session({ session, user, token }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login", // Changing the error redirect page to our custom login page
  },
};

export default NextAuth(authOptions);
