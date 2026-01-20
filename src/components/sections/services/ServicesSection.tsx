import { CategoryLabel, FlexCenter, Text } from '@/components/ui'
import { SERVICES } from '@/constants/services'
import { ServiceItem } from './ServiceItem'
import { COLORS } from '@/styles/Colors'

const ServicesSection = () => {
  return (
    <section
      id="solutions"
      className="flex justify-center items-start gap-8 px-4 lg:px-8 max-w-[1280px] mx-auto"
    >
      <FlexCenter vertical centerY className="max-w-[922px]">
        <CategoryLabel className="my-4" color={'white'}>
          <Text sm medium color={COLORS.text}>
            솔루션
          </Text>
        </CategoryLabel>
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </FlexCenter>
    </section>
  )
}

export default ServicesSection
