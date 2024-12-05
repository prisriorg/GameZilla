import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId:
        "1007810998886-iiieqjdrugj2li25kr1bg46lq0bvuo03.apps.googleusercontent.com",
      clientSecret: "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",

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name, image } = user;

      if (!email) return false;
      // // Check if user exists
      // const existingUser = await db
      //   .select()
      //   .from(users)
      //   .where(eq(users.email, email))
      //   .then((res) => res[0]);

      // Add user to database if not found
      // if (!existingUser) {
      //   await db.insert(users).values({
      //     email,
      //     name,
      //     image,
      //   });
      // }

      return true;
    },
    async session({ session, token }) {
      // if (session.user && token.sub) {
      //   const user = await db
      //     .select()
      //     .from(users)
      //     .where(eq(users.email, session.user.email))
      //     .then((res) => res[0]);

      //   session.user.id = user?.id; // Attach database user ID
      // }

      return session;
    },
    // authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      // return !!auth;
    // },
  },
});
