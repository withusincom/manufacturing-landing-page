import { Image as AntdImage, ImageProps as AntdImageProps } from 'antd'
export type ImageProps = AntdImageProps

const Image = ({ src, alt, preview = false, ...restProps }: ImageProps) => {
  return <AntdImage src={src} alt={alt} preview={preview} {...restProps} />
}

export default Image
