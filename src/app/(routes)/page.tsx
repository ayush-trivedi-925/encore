import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
export default async function Home() {
  const session = await auth();
  return (
    <div className="">
      Encore
      <br />
      <Link href={"/profile"}>Go to Profile</Link>
      <br />
      {session && (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="border text-white bg-blue-600 px-3 py-2 rounded-xl"
            type="submit"
          >
            Sign Out
          </button>
        </form>
      )}
      {!session && (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            className="border text-white bg-blue-600 px-3 py-2 rounded-xl"
          >
            Signin with Google
          </button>
        </form>
      )}
    </div>
  );
}
