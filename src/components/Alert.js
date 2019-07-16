import React from 'react'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 * @useIn - ./
 */
function Alert({ type, text }) {
  return (
    <div className={`alert alert-${type}`}>
      {text}
    </div>
  )
}

export default Alert