import { Tag as AntTag, TagProps as AntTagProps } from 'antd'
import { cx } from '@/lib/utils'

export type TagProps = Omit<AntTagProps, 'color'> & {
  color?: string
  className?: string
}

export const Tag = ({ color, className, ...restProps }: TagProps) => {
  return <AntTag color={color} className={cx(className)} {...restProps} />
}

export default Tag
