import React, { FunctionComponent } from 'react'
import FormatJson from '@/components/FormatJson'

type DebugDocs = {
  docs: any
}

const DebugDocs: FunctionComponent<DebugDocs> = ({ docs }) => {

  const parsed = parseDebug(docs)
  return (
    <FormatJson object={parsed} />
  )
}

export default DebugDocs


function parseDe