import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import resend from "@/lib/resend";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        const { error } = await resend.emails.send({
          from: "Awesome LMS  <onboarding@resend.dev>",
          to: [email],
          subject: "Awesome LMS - Verify your email",
          html: `<p>Your OTP is <strong>${otp}</strong></p>`,
        });

        if (error) {
          return console.error({ error });
        }
      },
    }),
  ],
});
