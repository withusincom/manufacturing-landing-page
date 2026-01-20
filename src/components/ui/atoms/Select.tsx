import { Select as AntdSelect, type SelectProps as AntdSelectProps } from 'antd'

export type SelectProps = AntdSelectProps

const Select = (props: SelectProps) => {
  return <AntdSelect {...props} />
}

export default Select
