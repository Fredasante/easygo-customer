"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import CountrySelect from "./CountrySelect";

const PhoneVerificationForm = () => {
  return (
    <div className="max-w-md mx-auto my-10 lg:my-14 px-4">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl mb-2">
            Verify you&apos;re real
          </CardTitle>
          <CardDescription>
            Enter the mobile number to receive an SMS verification code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 mt-3">
              <div className="flex flex-col">
                <Label htmlFor="phone-number">
                  Phone number<span className="ml-0.5">*</span>
                </Label>
                <CountrySelect />
              </div>
              <div>
                <Button variant="green" className="w-full mt-3">
                  Send Code
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneVerificationForm;
