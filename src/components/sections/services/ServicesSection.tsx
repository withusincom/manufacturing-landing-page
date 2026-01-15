import { motion } from 'motion/react'
import { ServiceItem } from './ServiceItem'
import { SERVICES } from '@/constants/services'

const ServicesSection = () => {
  return (
    <motion.section
      id="solutions"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="flex justify-center items-start gap-8 px-4 lg:px-8 max-w-[1280px] mx-auto"
    >
      <div className="flex-1 max-w-[922px]">
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default ServicesSection
