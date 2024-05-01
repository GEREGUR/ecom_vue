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

export function SignIn() {
  return (
    <Card className="mx-auto max-w-xs">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
          <Button className="w-full" variant="outline">
            Sign in with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline" href="/auth/sign-up">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
