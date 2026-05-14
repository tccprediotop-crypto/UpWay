import { z } from "zod";

import { normalizePickupCode } from "@/lib/pickup-code";

const phoneSchema = z
  .string()
  .trim()
  .min(10, "Informe um telefone.")
  .max(20, "Use um telefone com DDD.");

const emailSchema = z
  .string()
  .email("Informe um e-mail valido.")
  .transform((value) => value.trim().toLowerCase());

const passwordSchema = z
  .string()
  .min(8, "A senha deve ter ao menos 8 caracteres.")
  .max(64, "Use uma senha de ate 64 caracteres.")
  .refine((value) => /[A-Za-z]/.test(value) && /\d/.test(value), {
    message: "Use ao menos uma letra e um numero na senha."
  });

const towerNameSchema = z.string().trim().min(2, "Informe o bloco ou torre.");
const unitNumberSchema = z
  .string()
  .trim()
  .min(1, "Informe o apartamento.")
  .max(10, "Use ate 10 caracteres para o apartamento.");

const floorSchema = z
  .union([z.coerce.number().int().min(0).max(250), z.literal(""), z.undefined()])
  .transform((value) => (value === "" || value === undefined ? undefined : value));

function withPasswordConfirmation<
  TShape extends z.ZodRawShape & {
    password: z.ZodTypeAny;
  }
>(shape: TShape) {
  return z
    .object({
      ...shape,
      confirmPassword: z.string().min(1, "Confirme a senha.")
    })
    .refine((value) => {
      const passwordValue = value as {
        confirmPassword: string;
        password: string;
      };

      return passwordValue.password === passwordValue.confirmPassword;
    }, {
      message: "A confirmacao da senha nao confere.",
      path: ["confirmPassword"]
    });
}

export const createPackageSchema = z.object({
  trackingCode: z
    .string()
    .min(4, "Informe o codigo de rastreamento.")
    .max(40)
    .transform((value) => value.toUpperCase().trim()),
  carrier: z.string().trim().min(2, "Informe a transportadora.").max(40),
  description: z.string().trim().max(180).optional(),
  residentId: z.string().min(1, "Selecione um morador.")
});

export const createResidentSchema = z.object({
  name: z.string().trim().min(3, "Informe o nome completo."),
  email: emailSchema,
  phone: phoneSchema,
  unitId: z.string().min(1, "Selecione a unidade."),
  password: passwordSchema
});

export const registerResidentSchema = withPasswordConfirmation({
  name: z.string().trim().min(3, "Informe o nome completo."),
  email: emailSchema,
  phone: phoneSchema,
  towerName: towerNameSchema,
  unitNumber: unitNumberSchema,
  floor: floorSchema,
  password: passwordSchema
});

export const registerPorterSchema = withPasswordConfirmation({
  name: z.string().trim().min(3, "Informe o nome completo."),
  email: emailSchema,
  phone: phoneSchema,
  jobTitle: z.string().trim().max(60).optional(),
  password: passwordSchema
});

export const updateResidentSchema = z.object({
  residentId: z.string().min(1),
  name: z.string().trim().min(3, "Informe o nome completo."),
  email: emailSchema,
  phone: phoneSchema,
  unitId: z.string().min(1, "Selecione a unidade."),
  password: z.string().trim().max(64).optional()
});

export const createUnitSchema = z.object({
  towerName: towerNameSchema,
  number: unitNumberSchema,
  floor: floorSchema
});

export const updateProfileSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo."),
  email: emailSchema,
  phone: phoneSchema
});

export const changePasswordSchema = z.object({
  currentPassword: passwordSchema,
  newPassword: passwordSchema
});

export const validateTokenSchema = z.object({
  code: z
    .string()
    .min(6, "Informe o token ou codigo da encomenda.")
    .max(200)
    .transform((value) => normalizePickupCode(value))
});
