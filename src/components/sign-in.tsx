import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    return (
      <>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </>
    );
  }
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
