import { Text } from '@/components/ui'

type UpdateDateProps = {
  date: string
}

const UpdateDate = ({ date }: UpdateDateProps) => {
  return <Text>{date}</Text>
}

export default UpdateDate
