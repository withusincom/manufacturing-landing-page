import { Input, Text, TextArea, Title } from '@/components/ui'
import { cx } from '@/lib/utils'
import { ColorMode } from '@/styles/Colors'
import { Button, Checkbox, Flex, Form, message } from 'antd'
import { motion } from 'motion/react'
import styled from 'styled-components'
import { CONTENT } from './ContactSection'

interface ContactFormProps {
  colors: ColorMode
  onSubmit?: (values: {
    name: string
    subject: string
    email: string
    phone: string
    question: string
    checkbox: boolean
  }) => void
}

const ContactForm = ({ colors, onSubmit }: ContactFormProps) => {
  const [form] = Form.useForm()

  const handleFinish = (values: {
    name: string
    subject: string
    email: string
    phone: string
    question: string
    checkbox: boolean
  }) => {
    onSubmit?.(values)
  }

  const handleFinishFailed = (errorInfo: {
    values: Record<string, any>
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
      name: '이름',
      email: '이메일',
      phone: '전화번호',
      question: '문의 사항',
      checkbox: '개인정보 수집 동의',
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
      message.warning(errorMessage, 3)

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cx('relative')}
    >
      {/* Gradient Border Effect */}
      <div
        className={cx('absolute', 'inset-0', 'rounded-2xl', 'p-[2px]')}
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
          {CONTENT.formTitle}
        </Title>

        <Flex vertical gap="middle">
          <Flex gap="middle" wrap className={cx('max-md:flex-col')}>
            <Form.Item
              className={cx('flex-1')}
              name="name"
              label={
                <Text base color={colors.text}>
                  {CONTENT.fields.name.label}
                </Text>
              }
              rules={[
                {
                  required: true,
                  message: CONTENT.errorMessages.name.required,
                },
              ]}
              help=""
            >
              <Input
                placeholder={CONTENT.fields.name.placeholder}
                size="large"
                style={{
                  backgroundColor: colors.inputBackground,
                  color: colors.text,
                  border: 'none',
                }}
              />
            </Form.Item>

            <Form.Item
              name="company"
              className={cx('flex-1')}
              label={
                <Text base color={colors.text}>
                  {CONTENT.fields.company.label}
                </Text>
              }
            >
              <Input
                placeholder={CONTENT.fields.company.placeholder}
                size="large"
                style={{
                  backgroundColor: colors.inputBackground,
                  color: colors.text,
                  border: 'none',
                }}
              />
            </Form.Item>
          </Flex>

          <Form.Item
            name="email"
            label={
              <Text base color={colors.text}>
                {CONTENT.fields.email.label}
              </Text>
            }
            rules={[
              {
                required: true,
                message: CONTENT.errorMessages.email.required,
              },
              {
                type: 'email',
                message: CONTENT.errorMessages.email.email,
              },
            ]}
            help=""
          >
            <Input
              type="email"
              size="large"
              placeholder={CONTENT.fields.email.placeholder}
              style={{
                backgroundColor: colors.inputBackground,
                color: colors.text,
                border: 'none',
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={
              <Text base color={colors.text}>
                {CONTENT.fields.phone.label}
              </Text>
            }
            rules={[
              {
                required: true,
                message: CONTENT.errorMessages.phone.required,
              },
            ]}
            help=""
          >
            <Input
              type="tel"
              size="large"
              placeholder={CONTENT.fields.phone.placeholder}
              style={{
                backgroundColor: colors.inputBackground,
                color: colors.text,
                border: 'none',
              }}
            />
          </Form.Item>

          <Form.Item
            name="question"
            label={
              <Text base color={colors.text}>
                {CONTENT.fields.question.label}
              </Text>
            }
            rules={[{ required: true, message: '문의 사항을 입력해주세요' }]}
            help=""
          >
            <TextArea
              rows={5}
              placeholder={CONTENT.fields.question.placeholder}
              style={{
                backgroundColor: colors.inputBackground,
                color: colors.text,
                border: 'none',
                resize: 'vertical',
              }}
            />
          </Form.Item>

          <Form.Item
            noStyle
            name="checkbox"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: CONTENT.errorMessages.checkbox.required,
              },
            ]}
          >
            <Checkbox>{CONTENT.fields.checkbox.label}</Checkbox>
          </Form.Item>
          <Form.Item noStyle>
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
              {CONTENT.submitButton}
            </Button>
          </Form.Item>
        </Flex>
      </StyledForm>
    </motion.div>
  )
}

export default ContactForm

const StyledForm = styled(Form)`
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
  .ant-form-item-explain {
    display: none;
  }
`
