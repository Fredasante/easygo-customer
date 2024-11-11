import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="max-w-lg mx-auto my-10 lg:my-14 px-4">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl mb-2">
            Let&apos;s get you started
          </CardTitle>
          <CardDescription>Begin by creating an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 mt-3">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter first name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter last name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Create a password" />
                <small className="text-gray-500">
                  Must be at least 8 characters
                </small>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" placeholder="Confirm password" />
                <small className="text-gray-500">
                  Must be at least 8 characters
                </small>
              </div>
              <div>
                <Button variant="green" className="w-full mt-3">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-xs text-gray-500 max-w-[280px] mx-auto text-center">
          <p>
            By Clicking &quot;Sign up&quot; you agree to Nani&apos;s
            <Link href="/" className="text-secondaryBrown font-semibold">
              &nbsp;Terms and privacy policy
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
