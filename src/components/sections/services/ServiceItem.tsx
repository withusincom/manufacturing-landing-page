import { Service } from '@/constants/services'
import { Flex } from 'antd'
import { motion, stagger } from 'motion/react'
import ServiceFeature from './ServiceFeature'
import ServiceImageCard from './ServiceImageCard'
import { FlexCenter } from '@/components/ui'

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.1, { startDelay: 0.2 }),
    },
  },
}

const feature = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

interface ServiceSectionProps {
  service: Service
}

const getBadgeColor = (badgeColor: string): string => {
  const colorMap: Record<string, string> = {
    'bg-sky-500': '#0ea5e9',
    'bg-blue-600': '#2563eb',
    'bg-emerald-500': '#10b981',
    'bg-slate-700': '#475569',
    'bg-gray-400': '#9ca3af',
    'bg-zinc-900': '#18181b',
  }
  return colorMap[badgeColor] || '#1677ff'
}

export const ServiceItem = ({ service }: ServiceSectionProps) => {
  return (
    <motion.div
      className="pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <FlexCenter
        vertical
        className={`${
          service.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
        center
        gap={40}
        wrap={false}
      >
        <ServiceFeature
          color={getBadgeColor(service.badgeColor)}
          text={service.badge}
          number={service.number}
          title={service.heading}
          description={service.description}
          variants={feature}
        />
        <ServiceImageCard
          src={service.imgSrc}
          alt={service.badge}
          backgroundColor={service.backgroundColor}
          variants={feature}
        />
      </FlexCenter>
    </motion.div>
  )
}

export default ServiceItem
