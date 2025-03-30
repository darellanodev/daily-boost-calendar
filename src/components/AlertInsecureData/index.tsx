import React from 'react'

import './alertInsecureData.css'
import { Message } from '../Message'

export const AlertInsecureData: React.FC = () => {
  return (
    <Message
      title="Security Warning"
      content="This demo stores data in local storage insecurely. Avoid using sensitive data due to potential security risks caused by GitHub Pages limitations."
    />
  )
}
