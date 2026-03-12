/**
 * company.ts
 * Datos estáticos de la empresa. Fuente de verdad para Footer, Schema.org,
 * páginas de contacto, sobre nosotros, etc.
 * Referencia: docs/context/business-logic.md → EEAT / Trustworthiness
 */

export const company = {
  name: "Business Dollar",
  legalName: "Business Dollar S.A.C.",
  ruc: "20XXXXXXXXX", // TODO: reemplazar con RUC real
  sbsRegistro: "XXXX", // TODO: reemplazar con número de registro SBS real
  url: "https://business-dollar.pe",
  appUrl: "https://app.business-dollar.pe",
  email: "contacto@business-dollar.pe",
  phone: "+51 1 XXX XXXX", // TODO: reemplazar con teléfono real
  whatsapp: "+51 9XX XXX XXX", // TODO: reemplazar con WhatsApp real
  address: "Lima, Perú",
  founded: 2020, // TODO: verificar año de fundación
  description:
    "Casa de cambio digital regulada por la SBS. Compra y venta de dólares online al mejor tipo de cambio.",
} as const;

export const social = {
  facebook: "https://facebook.com/businessdollarpe", // TODO: verificar
  instagram: "https://instagram.com/businessdollarpe", // TODO: verificar
  linkedin: "https://linkedin.com/company/businessdollarpe", // TODO: verificar
  twitter: "https://twitter.com/businessdollar", // TODO: verificar
} as const;

export const bankPartners = [
  "BCP",
  "BBVA",
  "Scotiabank",
  "Interbank",
] as const;
