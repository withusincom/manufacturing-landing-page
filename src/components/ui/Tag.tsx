import { Tag as AntTag, TagProps } from 'antd'
import { cx } from '@/lib/utils'

interface ServiceTagProps extends Omit<TagProps, 'color'> {
  color?: string
  className?: string
}

export const Tag = ({ color, className, ...restProps }: ServiceTagProps) => {
  return <AntTag color={color} className={cx(className)} {...restProps} />
}

export default Tag
