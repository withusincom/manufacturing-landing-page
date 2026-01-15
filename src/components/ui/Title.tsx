import {
  getColorStyle,
  getTypographyClasses,
  TypographyProps,
} from '@/lib/typography'
import { cx } from '@/lib/utils'
import { Typography } from 'antd'
import type { TitleProps as AntdTitleProps } from 'antd/es/typography/Title'

export type TitleProps = AntdTitleProps & TypographyProps
const { Title: AntdTitle } = Typography

const Title = ({
  children,
  className,
  color,
  style,
  ref,
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
  ...restProps
}: React.PropsWithChildren<TitleProps>) => {
  return (
    <AntdTitle
      ref={ref}
      className={cx(
        getTypographyClasses({
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
        }),
        className,
      )}
      style={{ ...getColorStyle(color), ...style }}
      {...restProps}
    >
      {children}
    </AntdTitle>
  )
}

export default Title
