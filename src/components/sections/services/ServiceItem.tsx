import { Service } from '@/constants/services'
import { Flex } from 'antd'
import { motion } from 'motion/react'
import ServiceFeature from './ServiceFeature'
import ServiceImageCard from './ServiceImageCard'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

interface ServiceSectionProps {
  service: Service
  index?: number
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

export const ServiceItem = ({ service, index = 0 }: ServiceSectionProps) => {
  return (
    <motion.section
      id={`service-${service.id}`}
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Flex
        vertical={true}
        className={`${
          service.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
        justify="center"
        align="center"
        gap={40}
        wrap={false}
      >
        <ServiceFeature
          color={getBadgeColor(service.badgeColor)}
          text={service.badge}
          number={service.number}
          title={service.heading}
          description={service.description}
        />
        <ServiceImageCard
          src={service.imgSrc}
          alt={service.badge}
          backgroundColor={service.backgroundColor}
          variants={fadeUpVariants}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </Flex>
    </motion.section>
  )
}

export default ServiceItem
