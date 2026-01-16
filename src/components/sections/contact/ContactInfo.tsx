import { Button, CategoryLabel, Text, Title } from '@/components/ui'
import { cx } from '@/lib/utils'
import { Space } from 'antd'
import { Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import ContactCard from './ContactCard'
import { CONTENT } from './ContactSection'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const ContactInfo = ({ colors }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className={cx('space-y-8')}
    >
      <motion.div variants={fadeUpVariants} transition={{ duration: 0.5 }}>
        <CategoryLabel color={colors.formCardBackground}>
          <Text sm medium color={colors.text}>
            {CONTENT.categoryLabel}
          </Text>
        </CategoryLabel>
      </motion.div>

      <motion.div variants={fadeUpVariants} transition={{ duration: 0.5 }}>
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
          {CONTENT.heading}
        </Title>
      </motion.div>

      <motion.div variants={fadeUpVariants} transition={{ duration: 0.5 }}>
        <Text
          lg
          color={colors.textSecondary}
          className={cx('leading-relaxed', 'whitespace-pre-line')}
        >
          {CONTENT.description}
        </Text>
      </motion.div>

      <motion.div variants={fadeUpVariants} transition={{ duration: 0.5 }}>
        <Space vertical size="middle" className={cx('w-full')}>
          <ContactCard
            icon={<Mail size={24} className={cx('text-black')} />}
            text={CONTENT.email}
          >
            <Button
              type="primary"
              href={`mailto:${CONTENT.email}`}
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
              }}
            >
              {CONTENT.emailButton}
            </Button>
          </ContactCard>
          <ContactCard
            icon={<MapPin size={24} className={cx('text-black')} />}
            text={CONTENT.address}
          >
            <Button
              type="primary"
              href={CONTENT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
              }}
            >
              {CONTENT.addressButton}
            </Button>
          </ContactCard>
        </Space>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo
