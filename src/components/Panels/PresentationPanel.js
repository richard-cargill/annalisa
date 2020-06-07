import React from 'react'

const PresentationPanel = ({ iframe, fullWidth, text }) => {
  const presentationClass = `container panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`
  const url = `${iframe.internal.content}`
  const width = 960
  const height = 569
  const linkText = text || 'Continue to case study'
  const linkUrl = url.replace('&rm=minimal', '')
  return (
    <section className={presentationClass}>
      <div className="mobile-is-hidden presentation">
        <iframe
          src={url}
          width={width}
          height={height}
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          frameBorder="0"
        />
      </div>
      <a className="large-is-hidden" href={linkUrl} target="_blank">
        {linkText}
      </a>
    </section>
  )
}

export default PresentationPanel
