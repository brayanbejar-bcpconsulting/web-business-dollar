/**
 * date.ts
 * Utilidades de formato de fechas en español (Perú).
 */

const formatter = new Intl.DateTimeFormat("es-PE", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const formatterShort = new Intl.DateTimeFormat("es-PE", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

/** Formatea una fecha como "12 de marzo de 2026" */
export function formatDate(date: Date): string {
  return formatter.format(date);
}

/** Formatea una fecha como "12 mar. 2026" */
export function formatDateShort(date: Date): string {
  return formatterShort.format(date);
}

/** Devuelve el ISO string solo con la fecha "2026-03-12" */
export function toISODate(date: Date): string {
  return date.toISOString().split("T")[0];
}
