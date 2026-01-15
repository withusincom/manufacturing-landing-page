import { Input } from 'antd'
import { TextAreaProps } from 'antd/es/input/TextArea'

const { TextArea: AntdTextArea } = Input
const TextArea = (props: TextAreaProps) => {
  return <AntdTextArea {...props} />
}

export default TextArea
