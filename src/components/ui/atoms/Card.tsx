import { Card as AntdCard, CardProps as AntdCardProps } from 'antd'

export type CardProps = AntdCardProps

const Card = ({ children, ...restProps }: CardProps) => {
  return <AntdCard {...restProps}>{children}</AntdCard>
}

export default Card
