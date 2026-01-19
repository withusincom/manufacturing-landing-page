import { buttonSizes } from '@/lib/button'
import { Button as AntdButton } from 'antd'
import { ButtonProps as AntdButtonProps } from 'antd/es/button'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'

export type ButtonProps = AntdButtonProps & {
  sm?: boolean
  lg?: boolean
  media?: boolean
  arrow?: 'left' | 'right' | 'up' | 'down'
}

const Button = ({
  sm,
  lg,
  media,
  size,
  type,
  variant,
  arrow,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <AntdButton size={size} type={type} variant={variant} {...restProps}>
      {arrow === 'left' && <ChevronLeft />}
      {children}
      {arrow === 'right' && <ChevronRight />}
      {arrow === 'up' && <ChevronUp />}
      {arrow === 'down' && <ChevronDown />}
    </AntdButton>
  )
}

export default Button
