import { StageConfig } from '@l2beat/config'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { RiskValues } from '../../utils/risks/types'
import { getRiskSentiments } from '../../utils/risks/values'
import { RosetteTooltipPopup, SmallRosette } from '../rosette'

export interface RosetteCellProps {
  riskValues: RiskValues
  stage?: StageConfig
  isUpcoming?: boolean
}

export function RosetteCell({
  riskValues,
  isUpcoming,
  stage,
}: RosetteCellProps) {
  const riskSentiments = getRiskSentiments(riskValues)
  return (
    <span
      className="Tooltip"
      title={renderToStaticMarkup(
        <RosetteTooltipPopup
          riskSentiments={riskSentiments}
          riskValues={riskValues}
        />,
      )}
      data-tooltip-big
    >
      <SmallRosette
        risks={riskSentiments}
        className="h-6 w-6 md:h-8 md:w-8"
        isUpcoming={isUpcoming}
        isDarkerGreen={true}
        stage={stage}
      />
    </span>
  )
}
