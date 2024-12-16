"use client";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schemas";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { LoginPayload } from "@/repositories/auth-repository";
// import DI from "@/di-container";
import { ClipLoader } from "react-spinners";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleLoginSubmit = async (data: LoginPayload) => {
    setLoading(true);
    console.log(data);

    // try {
    //   await DI.authService.login(data);

    //   router.push("/");
    // } catch (error) {
    // } finally {
    //   setLoading(false);
    // }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLoginSubmit)}>
              <div className="grid w-full items-center gap-5 mt-2">
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Enter password"
                              type={showPassword ? "text" : "password"}
                              {...field}
                            />
                            <span
                              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                </div>
                <div>
                  <Button
                    variant="orange"
                    className="w-full mt-2"
                    disabled={loading || !form.formState.isValid}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        Signing in
                        <ClipLoader color="#fff" loading={loading} size={20} />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
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
              href="/auth/register"
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
