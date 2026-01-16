import {
  getColorStyle,
  getTypographyClasses,
  TypographyProps,
} from '@/lib/typography'
import { cx } from '@/lib/utils'
import { Typography } from 'antd'
import type { LinkProps as AntdLinkProps } from 'antd/es/typography/Link'

const { Link: AntdLink } = Typography

export type LinkProps = AntdLinkProps & TypographyProps

const Link = ({
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
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <AntdLink
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
    </AntdLink>
  )
}

export default Link
