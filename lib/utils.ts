import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Lang = "pt" | "en"

/** Escolhe a tradução para `lang`, com fallback para o texto em PT. */
export const tx = (lang: Lang, pt: string, en?: string) => (lang === "en" && en ? en : pt)
