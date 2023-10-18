import { z } from "zod";

export const EmailValidator = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  text: z.string().min(3, {
    message: 'Text must be at least 3 characters long',
  })
    .max(128, {
      message: 'Text must be less than 128 characters long',
    }),
});

export type EmailRequestType = z.infer<typeof EmailValidator>;
