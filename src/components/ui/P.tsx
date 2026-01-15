import {
  getColorStyle,
  getTypographyClasses,
  TypographyProps,
} from '@/lib/typography'
import { cx } from '@/lib/utils'
import { Typography } from 'antd'
import type { ParagraphProps as AntdParagraphProps } from 'antd/es/typography/Paragraph'

export type ParagraphProps = AntdParagraphProps & TypographyProps

const { Paragraph: AntdParagraph } = Typography

const P = ({
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
}: React.PropsWithChildren<ParagraphProps>) => {
  return (
    <AntdParagraph
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
    </AntdParagraph>
  )
}

export default P
