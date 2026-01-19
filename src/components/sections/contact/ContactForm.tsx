import { Input, Text, TextArea, Title } from '@/components/ui'
import { cx } from '@/lib/utils'
import { ColorMode } from '@/styles/Colors'
import { Button, Checkbox, Flex, Form, message } from 'antd'
import _ from 'lodash'
import { motion } from 'motion/react'
import styled from 'styled-components'
import { ContactFormData, ContactFormItem } from './ContactSection'

export interface ContactFormValues {
  name: string
  company?: string
  email: string
  phone: string
  question: string
  checkbox: boolean
}
export interface ContactFormProps {
  data: ContactFormData
  colors: ColorMode
  onSubmit?: (values: ContactFormValues) => void
}

const ContactForm = ({ data, colors, onSubmit }: ContactFormProps) => {
  const [form] = Form.useForm<ContactFormValues>()
  const [messageApi, contextHolder] = message.useMessage()

  const handleFinish = (values: ContactFormValues) => {
    onSubmit?.(values)
  }

  const handleFinishFailed = (errorInfo: {
    values: ContactFormValues
    errorFields?: Array<{
      name: (string | number)[]
      errors: string[]
    }>
    outOfDate?: boolean
  }) => {
    if (!errorInfo.errorFields || errorInfo.errorFields.length === 0) {
      return
    }

    // 필드 순서 정의 (폼에 나타나는 순서대로)
    const fieldOrder = ['name', 'email', 'phone', 'question', 'checkbox']
    const fieldLabels: Record<string, string> = {
      name: data.fields.name.label,
      email: data.fields.email.label,
      phone: data.fields.phone.label,
      question: data.fields.question.label,
      checkbox: data.fields.checkbox.label,
    }

    // 에러 필드를 순서대로 정렬
    const sortedErrors = errorInfo.errorFields
      .map((field) => {
        const fieldName = Array.isArray(field.name) ? field.name[0] : field.name
        return {
          name: String(fieldName),
          errors: field.errors,
          order: fieldOrder.indexOf(String(fieldName)),
        }
      })
      .filter((field) => field.order !== -1)
      .sort((a, b) => a.order - b.order)

    // 첫 번째 에러만 메시지 표시
    if (sortedErrors.length > 0) {
      const firstError = sortedErrors[0]
      const label = fieldLabels[firstError.name] || firstError.name
      const errorMessage = firstError.errors[0] || `${label}을(를) 입력해주세요`
      messageApi.warning(errorMessage, 3)

      // 첫 번째 에러 필드로 스크롤
      setTimeout(() => {
        const fieldElement = document.querySelector(
          `[name="${firstError.name}"]`,
        )
        if (fieldElement instanceof HTMLElement) {
          fieldElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }, 100)
    }
  }

  const renderChildren = (key: string, value: ContactFormItem) => {
    if (_.includes(['text', 'email', 'tel'], value.type)) {
      return (
        <Input
          type={value.type}
          placeholder={data.fields.company.placeholder}
          size="large"
          style={{
            backgroundColor: colors.inputBackground,
            color: colors.text,
            border: 'none',
          }}
        />
      )
    }

    if (value.type === 'textarea') {
      return (
        <TextArea
          rows={5}
          placeholder={data.fields.question.placeholder}
          style={{
            backgroundColor: colors.inputBackground,
            color: colors.text,
            border: 'none',
            resize: 'vertical',
          }}
        />
      )
    }

    if (value.type === 'checkbox') {
      return <Checkbox>{data.fields.checkbox.placeholder}</Checkbox>
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cx('relative')}
    >
      {contextHolder}
      {/* Gradient Border Effect */}
      <div
        className={cx('absolute', 'inset-0', 'rounded-2xl', 'p-0.5')}
        style={{
          background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
        }}
      >
        <div
          className={cx('w-full', 'h-full', 'rounded-2xl')}
          style={{ backgroundColor: colors.formCardBackground }}
        />
      </div>

      <StyledForm
        form={form}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        layout="vertical"
        className={cx('relative', 'z-10', 'p-8', 'md:p-10')}
      >
        <Title
          level={3}
          text2xl
          semibold
          color={colors.text}
          className={cx('md:text-3xl', 'mb-6')}
        >
          {data.formTitle}
        </Title>

        <Flex vertical gap="middle">
          <Flex gap="middle" wrap className={cx('max-md:flex-col')}>
            {Object.entries(data.fields).map(
              ([key, value]) =>
                value.layout === 'row' && (
                  <Form.Item
                    className={cx(' flex-1')}
                    key={key}
                    name={key}
                    label={
                      <Text base color={colors.text}>
                        {data.fields.phone.label}
                      </Text>
                    }
                    rules={data.fields.phone.rules}
                    valuePropName={key === 'checkbox' ? 'checked' : 'value'}
                    help=""
                  >
                    {renderChildren(key, value)}
                  </Form.Item>
                ),
            )}
          </Flex>
          {Object.entries(data.fields).map(
            ([key, value]) =>
              value.layout === 'col' && (
                <Form.Item
                  className={cx('flex-1')}
                  key={key}
                  name={key}
                  label={
                    <Text base color={colors.text}>
                      {data.fields.phone.label}
                    </Text>
                  }
                  rules={data.fields.phone.rules}
                  valuePropName={key === 'checkbox' ? 'checked' : 'value'}
                  help=""
                >
                  {renderChildren(key, value)}
                </Form.Item>
              ),
          )}

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              backgroundColor: colors.buttonBackground,
              color: colors.buttonText,
              border: 'none',
              width: '100%',
            }}
          >
            {data.submitButton}
          </Button>
        </Flex>
      </StyledForm>
    </motion.div>
  )
}

export default ContactForm

const StyledForm = styled(Form<ContactFormValues>)`
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-form-item-label {
    margin-bottom: 0;
  }
  .ant-form-item-control {
    margin-bottom: 0;
  }
  .ant-form-item-control-input {
    margin-bottom: 0;
  }
`
