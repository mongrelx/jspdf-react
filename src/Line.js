import React from 'react'

import { Consumer } from './PDF'

const Line = (props) => {
  const { x1, y1, x2, y2, width = 1 } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setLineWidth(width)
        context.doc.line(x1, y1, x2, y2)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Line
