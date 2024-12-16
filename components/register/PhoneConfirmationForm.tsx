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
import InputOTPPattern from "./InputOTPPattern";

const PhoneConfirmationForm = () => {
  return (
    <div className="max-w-md mx-auto my-10 lg:my-14 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl mb-2">
            Confirm your phone number
          </CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to <strong>+233 12345633</strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 mt-3">
              <div className="flex flex-col space-y-1.5">
                <InputOTPPattern />
              </div>
              <div>
                <Button variant="green" className="w-full mt-3">
                  Verify Now
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <p>
            Wait <span className="font-bold">1.16s</span> before requesting a
            new code
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PhoneConfirmationForm;
