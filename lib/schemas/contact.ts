import { z } from "zod";

const PHONE_REGEX = /^\+?[0-9\s().-]+$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom complet est requis"),
  phone: z
    .string()
    .trim()
    .max(20, "Le téléphone ne peut pas dépasser 20 caractères")
    .regex(PHONE_REGEX, "Le téléphone doit être un numéro valide (chiffres uniquement)")
    .refine((value) => (value.match(/\d/g) ?? []).length >= 8, {
      message: "Le téléphone doit contenir au moins 8 chiffres",
    }),
  email: z.union([z.string().trim().email("Adresse email invalide"), z.literal("")]).optional(),
  subject: z.string().min(1, "Sélectionnez un objet"),
  message: z.string().optional(),
  recaptchaToken: z.string().nullable().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
