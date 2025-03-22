import React from 'react'

import './message.css'

interface MessageProps {
  title: string
  content: string
  isOneLine?: boolean
}

export const Message: React.FC<MessageProps> = ({
  title,
  content,
  isOneLine,
}) => {
  return (
    <div className="message">
      {isOneLine ? (
        <p>
          <span className="bold">{title}</span> <span>{content}</span>
        </p>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{content}</p>
        </>
      )}
    </div>
  )
}
