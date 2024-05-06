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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const login = async (email: string, password: string) => {
  const credentials = {
    email: email,
    password: password,
  };
  try {
    const response = await axios.post(
      "https://https://beta.ecomvue.com/users/login",
      new URLSearchParams(credentials),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return response.data.acces_token;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      const credentials = {
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          "https://https://beta.ecomvue.com/users/login",
          new URLSearchParams(credentials),
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        return response.data.acces_token;
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      const token = data.access_token;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      setToken(token);
      router.replace("/api/admin/catalog");
    },
    onError: (error) => {
      console.error("Login error:", error.message);
    },
  });

  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await login(email, password);

      localStorage.setItem("token", token);
      setToken(token); // Set the token value to state
      router.replace("/api/admin/catalog");
    } catch (error: any) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-full w-full flex items-center justify-center">
      <Card className="mx-auto max-w-md sm:max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={handleSumbit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm underline" href="#">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?
            <Link className="underline" href="#">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
