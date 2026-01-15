import { cx } from '@/lib/utils'
import FlexCenter, { FlexCenterProps } from './FlexCenter'
import Text from './Text'

export type CategoryLabelProps = {
  color: string
  className?: string
} & FlexCenterProps

const CategoryLabel = ({
  color,
  className,
  children,
  ...restProps
}: React.PropsWithChildren<CategoryLabelProps>) => {
  return (
    <FlexCenter
      center
      style={{ backgroundColor: color }}
      className={cx(
        'leading-tight h-9 w-fit px-4 py-2 rounded-full shadow-sm',
        className,
      )}
      {...restProps}
    >
      {typeof children === 'string' ? (
        <Text sm medium>
          {children}
        </Text>
      ) : (
        children
      )}
    </FlexCenter>
  )
}

export default CategoryLabel
