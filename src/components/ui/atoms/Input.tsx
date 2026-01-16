import { Input as AntdInput } from 'antd'
import { InputProps as AntdInputProps } from 'antd/es/input'

export type InputProps = AntdInputProps

const Input = (props: InputProps) => {
  return <AntdInput {...props} />
}

export default Input
