"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram, FaYandex } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import axios from "axios";
import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../_utils/auth";
import { useRouter } from "next/navigation";
import { loginSchema } from "../../schemas/loginSchema";

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const {
    mutateAsync: loginUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      router.push("/office");
    },
    onError: (error: Error) => {
      console.error("Login Error:", error.message);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationErrors([]);
    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      const errors = result.error.issues.map(
        (issue) => `${issue.path.join(".")} - ${issue.message}`
      );
      setValidationErrors(errors);
      return;
    }

    try {
      await loginUser(result.data);
    } catch (error: any) {
      console.error("Error in form handling:", error.message);
    }
  };

  return (
    <Card className="mx-auto max-w-xs">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent ref={formRef} onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit" disabled={isPending}>
            Sign in
          </Button>
          <div className="grid grid-cols-3 gap-2">
            <Button className="w-auto" variant="outline">
              <SlSocialVkontakte size={28} />
            </Button>
            <Button className="w-auto" variant="outline">
              <FaYandex size={26} />
            </Button>
            <Button className="w-auto" variant="outline">
              <MdOutlineAlternateEmail size={28} />
            </Button>
          </div>
          {/* <Button className="w-full" variant="outline">
              <FaTelegram className="mr-2" width={10} height={10} />
              Sign in with Telegram
            </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline ml-2" href="/auth/sign-up">
            Sign up
          </Link>
        </div>
        {error && (
          <p className="mt-4 text-center text-red-500">
            Error: {(error as Error).message}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
