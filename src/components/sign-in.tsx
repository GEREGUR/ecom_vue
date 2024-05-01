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
          <Button className="w-full" variant="outline">
            <FaTelegram className="mr-2" width={10} height={10} />
            Sign in with Telegram
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline ml-2" href="/auth/sign-up">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
