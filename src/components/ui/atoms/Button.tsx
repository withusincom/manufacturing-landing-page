import { buttonSizes } from '@/lib/button'
import { Button as AntdButton } from 'antd'
import { ButtonProps as AntdButtonProps } from 'antd/es/button'

export type ButtonProps = AntdButtonProps & {
  sm?: boolean
  lg?: boolean
  media?: boolean
}

const Button = ({
  sm,
  lg,
  media,
  size,
  type,
  variant,
  ...restProps
}: ButtonProps) => {
  return <AntdButton size={size} type={type} variant={variant} {...restProps} />
}

export default Button
