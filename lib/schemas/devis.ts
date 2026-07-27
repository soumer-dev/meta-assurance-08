import { z } from "zod";

export const CLIENT_TYPE_VALUES = ["particulier", "entreprise", "professionnel"] as const;

const PHONE_REGEX = /^\+?[0-9\s().-]+$/;

export const devisSchema = z.object({
  clientType: z.enum(CLIENT_TYPE_VALUES, { message: "Sélectionnez un type de client" }),
  garantie: z.string().min(1, "Sélectionnez une garantie"),
  garantieLabel: z.string().min(1, "Sélectionnez une garantie"),
  name: z.string().trim().min(2, "Le nom complet est requis"),
  phone: z
    .string()
    .trim()
    .max(20, "Le téléphone ne peut pas dépasser 20 caractères")
    .regex(PHONE_REGEX, "Le téléphone doit être un numéro valide (chiffres uniquement)")
    .refine((value) => (value.match(/\d/g) ?? []).length >= 8, {
      message: "Le téléphone doit contenir au moins 8 chiffres",
    }),
  city: z.string().trim().min(2, "La ville est requise"),
  callback: z.boolean(),
  email: z.string().trim().email("Adresse email invalide"),
  recaptchaToken: z.string().nullable().optional(),
});

export type DevisFormValues = z.infer<typeof devisSchema>;
