import { Input } from 'antd'
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input/TextArea'

const { TextArea: AntdTextArea } = Input

export type TextAreaProps = AntdTextAreaProps

const TextArea = (props: TextAreaProps) => {
  return <AntdTextArea {...props} />
}

export default TextArea
