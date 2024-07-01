import { auth } from "@/auth";
import SignInPage from "./sign-in/page";

export default async function Home() {
  const session = await auth();
  console.log({ session });
  return (
    <div className="z-10 maw-w-5xl w-full item-center">
      {session?.user?.name && <h1> Hello, {session.user.name} </h1>}
      <SignInPage />
    </div>
  );
}
