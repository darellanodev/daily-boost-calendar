import React from 'react'

import './alertInsecureData.css'

export const AlertInsecureData: React.FC = () => {
  return (
    <div className="alert-insecure-data">
      <h1>Security Warning</h1>
      <p>
        This online demo stores sensitive data insecurely in local storage. Use
        with caution due to potential security risks. This is due to GitHub
        Pages limitations.
      </p>
    </div>
  )
}
