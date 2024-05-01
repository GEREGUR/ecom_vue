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
import { FaTelegram, FaYandex } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function SignUp() {
  return (
    <Card className="mx-auto max-w-xs">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
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
            Create an account
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
            Sign up with Telegram
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?
          <Link className="underline ml-2" href="/auth/sign-in">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
