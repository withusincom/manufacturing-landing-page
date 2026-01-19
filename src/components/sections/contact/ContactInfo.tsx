import {
  Button,
  CategoryLabel,
  MotionGroup,
  Text,
  Title,
} from '@/components/ui'
import { cx } from '@/lib/utils'
import { Space } from 'antd'
import { Mail, MapPin } from 'lucide-react'
import { motion, stagger, Variants } from 'motion/react'
import ContactCard from './ContactCard'

const container: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: stagger(0.15, { startDelay: 0.2 }) },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const ContactInfo = ({ data, colors }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className={cx('space-y-8')}
    >
      <MotionGroup variants={item}>
        <CategoryLabel color={colors.formCardBackground}>
          <Text sm medium color={colors.text}>
            {data.categoryLabel}
          </Text>
        </CategoryLabel>

        <Title
          level={2}
          text4xl
          semibold
          color={colors.text}
          className={cx(
            'md:text-5xl',
            'leading-tight',
            'whitespace-pre-line',
            'mb-0',
          )}
        >
          {data.heading}
        </Title>

        <Text
          lg
          color={colors.textSecondary}
          className={cx('leading-relaxed', 'whitespace-pre-line')}
        >
          {data.description}
        </Text>

        <Space vertical size="middle" className={cx('w-full')}>
          <ContactCard
            icon={<Mail size={24} className={cx('text-black')} />}
            text={data.email}
          >
            <Button
              type="primary"
              href={`mailto:${data.email}`}
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
              }}
            >
              {data.emailButton}
            </Button>
          </ContactCard>
          <ContactCard
            icon={<MapPin size={24} className={cx('text-black')} />}
            text={data.address}
          >
            <Button
              type="primary"
              href={data.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
              }}
            >
              {data.addressButton}
            </Button>
          </ContactCard>
        </Space>
      </MotionGroup>
    </motion.div>
  )
}

export default ContactInfo
