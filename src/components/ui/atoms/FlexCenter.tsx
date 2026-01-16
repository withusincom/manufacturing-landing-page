import { Flex } from 'antd'
import React from 'react'

export type FlexCenterProps = React.ComponentProps<typeof Flex> & {
  center?: boolean
  centerX?: boolean
  centerY?: boolean
}

const FlexCenter = ({
  center,
  centerX,
  centerY,
  children,
  ...restProps
}: FlexCenterProps) => {
  return (
    <Flex
      justify={center || centerX ? 'center' : undefined}
      align={center || centerY ? 'center' : undefined}
      {...restProps}
    >
      {children}
    </Flex>
  )
}

export default FlexCenter
