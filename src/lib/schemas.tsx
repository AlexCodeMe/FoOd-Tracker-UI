import { z } from "zod"

export const LoginSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: "Username is required",
    })
    .max(20, { message: "Username must not exceed 20 characters" }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
})

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username is required",
    })
    .max(20, { message: "Username must not exceed 20 characters" }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
})
