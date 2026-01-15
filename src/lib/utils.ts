import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
