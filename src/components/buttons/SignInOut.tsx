"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return (
      <>
        <CircularProgress size={"1rem"} color="warning" />
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-3">
        <Link href={`/account`}>
          <Image
            src={session.user?.image ?? "/public/logo1.png"}
            width={35}
            height={35}
            alt={session.user?.name || "user name"}
            className="rounded-full"
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <button
      style={{
        border: "1px solid gray",
        padding: "5px 15px",
        borderRadius: "10px",
      }}
      className="text-black font-semibold hover:bg-[#a2a7ac44]"
      onClick={async () => await signIn()}
    >
      Sign in
    </button>
  );
}

export function SignOutButton() {
  const router = useRouter();

  return (
    <button
      style={{
        border: "1px solid gray",
        padding: "5px 15px",
        borderRadius: "10px",
      }}
      className="text-black font-semibold hover:bg-[#a2a7ac44]"
      onClick={() => {
        signOut();
        router.push("/");
      }}
    >
      Sign out
    </button>
  );
}
