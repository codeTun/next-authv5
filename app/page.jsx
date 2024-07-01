import { auth } from "@/auth";
import SignInPage from "./sign-in/page";
import SignOutButton from "./components/SignOutButton";
import Link from "next/link";
import Client from "./components/Client";

export default async function Home() {
  const session = await auth();
  console.log({ session });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-between items-center w-full max-w-5xl px-4">
        <h1 className="text-xl font-semibold text-gray-100">
          {session?.user?.name ? `Hello, ${session.user.name}` : "Welcome"}
        </h1>
        <SignOutButton />
      </div>
      <div className="z-10 max-w-5xl w-full flex flex-col items-center mt-4">
        {session?.user ? <SignInPage /> : <Link href="/sign-in">Sign in</Link>}
      </div>
      <Client props={session?.user?.name} />
    </div>
  );
}
