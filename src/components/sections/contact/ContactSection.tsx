import { cx } from '@/lib/utils'
import { COLORS_MODE } from '@/styles/Colors'
import ContactForm, { ContactFormProps } from './ContactForm'
import ContactInfo from './ContactInfo'

export type FieldValidationConfig = {
  required?: boolean
  type?:
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email'
    | 'tel'
  message?: string
}

export type ContactFormItem = {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox'
  layout: 'row' | 'col'
  rules: FieldValidationConfig[]
}

export type ContactFormData = {
  categoryLabel: string
  heading: string
  description: string
  email: string
  emailButton: string
  address: string
  mapUrl: string
  addressButton: string
  formTitle: string
  submitButton: string
  fields: {
    name: ContactFormItem
    company: ContactFormItem
    email: ContactFormItem
    phone: ContactFormItem
    question: ContactFormItem
    checkbox: ContactFormItem
  }
}

export const CONTACT_CONTENT: ContactFormData = {
  categoryLabel: '문의하기',
  heading: '우리 현장에 이 방식이 맞는지\n먼저 확인해보세요.',
  description:
    '모든 제조 현장에 동일한 AI가 맞지는 않습니다.\n현재 사용 중인 MES, 데이터 상태, 반복되는 문제 유형을 기준으로\n이 서비스가 실제로 도움이 될 수 있는지부터 함께 검토합니다.\n도입을 전제로 하지 않아도 괜찮습니다. 현장의 상황을 이해하는 것부터 시작합니다.',
  email: 'jwseo@withusin.com',
  emailButton: '메일 전송',
  address: '울산 남구 테크노산업로 55번길 10, AI 혁신파크 209호',
  mapUrl:
    'https://map.naver.com/p/search/%EC%9A%B8%EC%82%B0%20%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%81%AC%EB%85%B8%EC%82%B0%EC%97%85%EB%A1%9C%2055%EB%B2%88%EA%B8%B8%2010/address/14393278.7280503,4233787.8883415,%EC%9A%B8%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%81%AC%EB%85%B8%EC%82%B0%EC%97%85%EB%A1%9C55%EB%B2%88%EA%B8%B8%2010?c=17.00,0,0,0,dh&isCorrectAnswer=true',
  addressButton: '사무실 보기',
  formTitle: '현장 상황 간단히 알려주세요',
  submitButton: '문의하기',
  fields: {
    name: {
      label: '이름',
      placeholder: '이름을 입력해주세요',
      layout: 'row',
      type: 'text',
      rules: [
        {
          required: true,
          message: '이름을 입력해주세요',
        },
      ],
    },
    company: {
      label: '회사명',
      placeholder: '회사명을 입력해주세요',
      layout: 'row',
      type: 'text',
      rules: [
        {
          required: true,
          message: '회사명을 입력해주세요',
        },
      ],
    },
    email: {
      label: '이메일',
      placeholder: '이메일 주소를 입력해주세요',
      layout: 'col',
      type: 'email',
      rules: [
        {
          required: true,
          message: '이메일을 입력해주세요',
        },
        {
          type: 'email',
          message: '올바른 이메일 형식을 입력해주세요',
        },
      ],
    },
    phone: {
      label: '전화번호',
      placeholder: '회신 받으실 전화번호를 입력해주세요',
      layout: 'col',
      type: 'tel',
      rules: [
        {
          required: true,
          message: '전화번호를 입력해주세요',
        },
      ],
    },
    question: {
      label: '문의 사항',
      placeholder: '문의 사항을 입력해주세요',
      layout: 'col',

      type: 'textarea',
      rules: [
        {
          required: true,
          message: '문의 사항을 입력해주세요',
        },
      ],
    },
    checkbox: {
      label: '개인정보 동의',
      placeholder: '개인정보 수집 동의합니다. (필수)',
      layout: 'col',
      type: 'checkbox',
      rules: [
        {
          required: true,
          message: '개인정보 수집 동의를 입력해주세요',
        },
      ],
    },
  },
} as const

interface ContactSectionProps {
  mode?: 'light' | 'dark'
}

export const ContactSection = ({ mode = 'light' }: ContactSectionProps) => {
  const colors = COLORS_MODE[mode]

  const handleSubmit: NonNullable<ContactFormProps['onSubmit']> = (values) => {
    return
  }

  return (
    <section
      id="contact"
      className={cx('relative w-full py-20 px-6 md:px-12 lg:px-20')}
      style={{ backgroundColor: colors.background }}
    >
      <div className={cx('max-w-7xl', 'mx-auto')}>
        <div
          className={cx(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start',
          )}
        >
          <ContactInfo data={CONTACT_CONTENT} colors={colors} />
          <ContactForm
            data={CONTACT_CONTENT}
            colors={colors}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
}
export default ContactSection
