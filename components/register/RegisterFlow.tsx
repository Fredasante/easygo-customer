"use client";

import { useState } from "react";
import RegisterForm from "./RegisterForm";
import PhoneVerificationForm from "./PhoneVerificationForm";
import PhoneConfirmationForm from "./PhoneConfirmationForm";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth-reducer";
import DI from "@/di-container";
import { RegisterPayload } from "@/repositories/auth-repository";
import { toast } from "sonner";

const RegisterFlow = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterPayload | null>(null);
  const dispatch = useDispatch();

  const goToNextStep = () => setStep((prev) => prev + 1);

  const handleRegisterSubmit = async (
    data: RegisterPayload & { confirmPassword: string }
  ) => {
    const { confirmPassword, ...rest } = data;

    const payload = {
      firstname: rest.firstname,
      lastname: rest.lastname || null,
      email: rest.email,
      password: rest.password,
      username: null,
      phone: null,
    };
    setLoading(true);

    try {
      const res = await DI.authService.register(payload);

      dispatch(authActions.saveUserProfile(res.data?.data?.user));
      setFormData(data);
      toast.success(
        "Account created successfully. Check your email for verification."
      );
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 lg:my-14 px-4">
      {step === 1 && <RegisterForm />}
      {step === 2 && <PhoneVerificationForm onNextStep={goToNextStep} />}
      {step === 3 && <PhoneConfirmationForm />}
    </div>
  );
};

export default RegisterFlow;
