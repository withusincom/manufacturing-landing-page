import { SizeType } from 'antd/es/config-provider/SizeContext'

type ButtonSize = 'sm' | 'md' | 'lg'

export const buttonSizes: Record<ButtonSize, SizeType> = {
  sm: 'small',
  md: 'middle',
  lg: 'large',
} as const
