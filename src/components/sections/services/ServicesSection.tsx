import { SERVICES } from '@/constants/services'
import { ServiceItem } from './ServiceItem'

const ServicesSection = () => {
  return (
    <section
      id="solutions"
      className="flex justify-center items-start gap-8 px-4 lg:px-8 max-w-[1280px] mx-auto"
    >
      <div className="flex-1 max-w-[922px]">
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
