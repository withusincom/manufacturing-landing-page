import { CategoryLabel, FlexCenter } from '@/components/ui'
import { SERVICES } from '@/constants/services'
import { ServiceItem } from './ServiceItem'

const ServicesSection = () => {
  return (
    <section
      id="solutions"
      className="flex justify-center items-start gap-8 px-4 lg:px-8 max-w-[1280px] mx-auto"
    >
      <FlexCenter vertical centerY className="max-w-[922px]">
        <CategoryLabel className="my-4" color={'white'}>
          솔루션
        </CategoryLabel>
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </FlexCenter>
    </section>
  )
}

export default ServicesSection
