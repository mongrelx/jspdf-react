import React from 'react'

import { Consumer } from './PDF'

const Html = (props) => {
  const {
    x,
    y,
    sourceById,
    rawHtml
  } = props
  return (
    <Consumer>
      {(context) => {
        const specialElementHandlers = {
          [`#${sourceById}`]: () => true
        }
        const html = rawHtml ? rawHtml : document.getElementById(sourceById)
        context.doc.fromHTML(html, x, y, {
          'elementHandlers': specialElementHandlers
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

export default Html
