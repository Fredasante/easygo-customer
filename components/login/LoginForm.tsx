import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto my-10 lg:my-14 px-4">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl mb-2">
            Log in to your account
          </CardTitle>
          <CardDescription>Start your 30 day free trial</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 mt-2">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Password" />
              </div>
              <div>
                <Button variant="green" className="w-full mt-2">
                  Login
                </Button>
              </div>
            </div>
          </form>
          <div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-2 flex items-center justify-center space-x-2"
            >
              <Image
                src="/social-icons/google.png"
                alt="Google Icon"
                width={18}
                height={18}
              />
              <span>Sign in with google</span>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex items-center justify-center">
          <p className="mt-2">
            Don&apos;t have an account?&nbsp;
            <Link
              href="/register"
              className="text-secondaryBrown font-semibold"
            >
              Create one
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
