import {
  getColorStyle,
  getTypographyClasses,
  TypographyProps,
} from '@/lib/typography'
import { cx } from '@/lib/utils'
import { Typography } from 'antd'
import type { TextProps as AntdTextProps } from 'antd/es/typography/Text'

export type TextProps = AntdTextProps & TypographyProps

const { Text: AntdText } = Typography

const Text = ({
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
}: React.PropsWithChildren<TextProps>) => {
  return (
    <AntdText
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
    </AntdText>
  )
}

export default Text
