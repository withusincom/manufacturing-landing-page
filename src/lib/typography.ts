import { cx } from '@/lib/utils'

export const fontSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  text2xl: 'text-2xl',
  text3xl: 'text-3xl',
  text4xl: 'text-4xl',
  text5xl: 'text-5xl',
  text6xl: 'text-6xl',
  text7xl: 'text-7xl',
  text8xl: 'text-8xl',
  text9xl: 'text-9xl',
} as const

export const fontWeights = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  fontBlack: 'font-black',
} as const

export type TypographyProps = {
  [key in keyof typeof fontSizes]?: boolean
} & {
  [key in keyof typeof fontWeights]?: boolean
} & {
  className?: string
  color?: string
  ref?: React.RefObject<HTMLDivElement>
}

export const getTypographyClasses = (props: TypographyProps) => {
  const {
    xs,
    sm,
    base,
    lg,
    xl,
    text2xl,
    text3xl,
    text4xl,
    text5xl,
    text6xl,
    text7xl,
    text8xl,
    text9xl,
    thin,
    extralight,
    light,
    normal,
    medium,
    semibold,
    bold,
    extrabold,
    fontBlack,
  } = props

  return cx({
    [fontSizes.xs]: xs,
    [fontSizes.sm]: sm,
    [fontSizes.base]: base,
    [fontSizes.lg]: lg,
    [fontSizes.xl]: xl,
    [fontSizes.text2xl]: text2xl,
    [fontSizes.text3xl]: text3xl,
    [fontSizes.text4xl]: text4xl,
    [fontSizes.text5xl]: text5xl,
    [fontSizes.text6xl]: text6xl,
    [fontSizes.text7xl]: text7xl,
    [fontSizes.text8xl]: text8xl,
    [fontSizes.text9xl]: text9xl,
    [fontWeights.thin]: thin,
    [fontWeights.extralight]: extralight,
    [fontWeights.light]: light,
    [fontWeights.normal]: normal,
    [fontWeights.medium]: medium,
    [fontWeights.semibold]: semibold,
    [fontWeights.bold]: bold,
    [fontWeights.extrabold]: extrabold,
    [fontWeights.fontBlack]: fontBlack,
  })
}

export const getColorStyle = (
  color?: string,
): React.CSSProperties | undefined => {
  return color ? { color } : undefined
}
