import { z } from "zod";

// Accepts digits, letters, spaces and usual phone punctuation — letters are
// intentionally allowed (vanity numbers, extensions), not just digits.
const PHONE_REGEX = /^[0-9A-Za-zÀ-ÖØ-öø-ÿ+().\-\s]+$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom complet"),
  phone: z
    .string()
    .trim()
    .min(6, "Numéro de téléphone trop court")
    .max(30, "Numéro de téléphone trop long")
    .regex(PHONE_REGEX, "Numéro de téléphone invalide"),
  email: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^\S+@\S+\.\S+$/.test(value), {
      message: "Adresse email invalide",
    }),
  subject: z.string().min(1, "Sélectionnez un objet"),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactPayloadSchema = contactFormSchema.extend({
  recaptchaToken: z.string().optional(),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;