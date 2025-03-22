import React from 'react'

import './alertInsecureData.css'
import { Message } from '../Message'

export const AlertInsecureData: React.FC = () => {
  return (
    <Message
      title="Security Warning"
      content="This online demo stores sensitive data insecurely in local storage. Use with caution due to potential security risks. This is due to GitHub Pages limitations."
    />
  )
}
