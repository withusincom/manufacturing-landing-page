import { POC_CONTENT } from '@/constants/poc'
import { COLORS } from '@/styles/Colors'
import PocDeliverableItem from './PocDeliverableItem'
import PocPeriodItem from './PocPeriodItem'

const PocContent = () => {
  return (
    <div
      className="p-8 md:p-10 rounded-lg border"
      style={{
        backgroundColor: COLORS.gray800,
        borderColor: COLORS.gray700,
      }}
    >
      <div
        className="grid md:grid-cols-3 gap-6 mb-8 pb-8"
        style={{ borderBottomColor: COLORS.gray700 }}
      >
        {POC_CONTENT.period.map((item, index) => (
          <PocPeriodItem key={item.month} index={index} item={item} />
        ))}
      </div>

      <div className="space-y-3 mb-8">
        {POC_CONTENT.deliverables.map((item, index) => (
          <PocDeliverableItem key={item.id} index={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default PocContent
