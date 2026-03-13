/**
 * reading-time.ts
 * Calcula el tiempo de lectura estimado de un texto.
 * Asume una velocidad promedio de 200 palabras por minuto (lector adulto en español).
 */

const WORDS_PER_MINUTE = 200;

/**
 * Devuelve el tiempo de lectura estimado en minutos (mínimo 1).
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
