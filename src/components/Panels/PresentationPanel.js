import React from 'react'

const PresentationPanel = ({ iframe, fullWidth, text }) => {
  const presentationClass = `container presentation panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`
  const url = `${iframe.internal.content}`
  const width = 960
  const height = 569
  const linkText = text || 'View presentation'
  return (
    <section className={presentationClass}>
      <iframe
        className="mobile-is-hidden"
        src={url}
        width={width}
        height={height}
        allowFullScreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameBorder="0"
      />
      <a href={url} target="_blank">
        {linkText}
      </a>
    </section>
  )
}

export default PresentationPanel
