import { redirect } from "next/navigation";
import { Signin } from "../components/Signin";
import { auth } from "@/auth";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return <Signin />;
}
