// components
import { Button } from "@/components/ui/button";

// clerk
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

// next
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[600px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 text-center">
          Learn, practice, and master new languages with Lingo.
        </h1>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button size="lg" variant="primaryOutline">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button
              size="lg"
              variant="secondary"
              className="w-full max-w-2/3"
              asChild
            >
              <Link href="/learn">Continue Learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
