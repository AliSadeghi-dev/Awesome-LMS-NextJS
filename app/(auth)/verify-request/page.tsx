"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Check, Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useTransition } from "react";
import { toast } from "sonner";

function VerifyRequestContent() {
  const [otp, setOtp] = useState("");
  const [verifyPending, startVerifyTransition] = useTransition();
  const params = useSearchParams();
  const router = useRouter();

  const email = params.get("email") as string;
  const isOTPCompleted = otp.length === 6;

  function verifyOTP() {
    startVerifyTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Account verified successfully");
            router.push("/");
          },
          onError: () => {
            toast.error("Failed to verify account");
          },
        },
      });
    });
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent you an email verification code. Please check your email
          and enter the code to continue.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-4">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <Button
          className="w-full"
          onClick={verifyOTP}
          disabled={verifyPending || !isOTPCompleted}
        >
          {verifyPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <Check className="size-4" />
              Verify Account
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function VerifyRequestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyRequestContent />
    </Suspense>
  );
}
