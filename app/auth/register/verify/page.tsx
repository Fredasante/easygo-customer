"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import DI from "@/di-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaTimesCircle } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { ApiError } from "@/types";

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<
    "success" | "error" | null
  >(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const user_id = decodeURIComponent(searchParams.get("user_id") || "");
    const code = decodeURIComponent(searchParams.get("code") || "");

    if (!user_id || !code) {
      setVerificationStatus("error");
      setIsVerifying(false);
      return;
    }

    const verifyEmail = async () => {
      try {
        await DI.authService.verifyEmail({ user_id, code });

        setVerificationStatus("success");
      } catch (error: unknown) {
        let message = "An unexpected error occurred during email verification.";

        if (error instanceof Error) {
          const apiError = error as ApiError;

          if (apiError.response?.data?.message) {
            message = apiError.response.data.message;
          }
        }
        setErrorMessage(message);
        setVerificationStatus("error");
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="max-w-sm mx-auto my-10 lg:my-14 text-center">
      <Suspense fallback={<ClipLoader size={20} color="#E5A864" />}>
        {isVerifying ? (
          <div className="my-10 lg:my-[120px]">
            <p className="my-5">Verifying your email. Please wait</p>
            <ClipLoader size={20} color="#E5A864" />
          </div>
        ) : verificationStatus === "success" ? (
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700 text-lg flex items-center flex-col gap-5">
                  Email Verified Successfully
                  <IoIosCheckmarkCircle size={55} className="text-green-700" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  <br />
                  You can now login to your account.
                </p>
              </CardContent>
              <CardFooter className="w-full">
                <Button
                  onClick={() => router.push("/auth/login")}
                  className="mt-4 w-full"
                  variant="orange"
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-brandRed text-lg">
                  Failed to Verify Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-5">
                  <FaTimesCircle size={55} className="text-brandRed" />
                </div>
                {verificationStatus === "error" && (
                  <p className="text-gray-600 text-sm">
                    We were unable to verify your email.{" "}
                    {errorMessage || "The link may be invalid or expired."}
                  </p>
                )}
              </CardContent>
              <CardFooter className="w-full">
                <Button
                  onClick={() => router.push("/auth/register")}
                  className="mt-4 w-full"
                  variant="orange"
                >
                  Try Again
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default VerifyEmailPage;
