import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  return (
    <div>
      <UserButton />
    </div>
  );
}
