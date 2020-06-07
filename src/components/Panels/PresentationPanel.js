import React from 'react'

const Subpresentationtitle = ({ html, title}) => {
  return (
    <div className="paging__item leftalign">
    <span className="pageSelector__title">{title}</span>
    <div className="paging__description" dangerouslySetInnerHTML={{ __html: html }}/>
  </div>
  )
}

const PresentationPanel = ({ iframe, fullWidth, text, role, year, company, timeframe }) => {
  const presentationClass = `cool_presentation_panel panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`
  const url = `${iframe.internal.content}`
  const width = 960
  const height = 569
  const linkText = text || 'Continue to case study'
  const linkUrl = url.replace('&rm=minimal', '')
  return (
    <div>
    <aside className="background-alt mobile-is-hidden">
      <nav className="paging container nowrap">
        <Subpresentationtitle html={year} title="Tools"/>
        <Subpresentationtitle html={role} title="Role"/>
        <Subpresentationtitle html={company} title="Client"/>
        <Subpresentationtitle html={timeframe} title="Timeframe"/>
      </nav>
    </aside>
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
      <a className="large-is-hidden button pageSelector" href={linkUrl} target="_blank">
        {linkText}
      </a>
    </section>
    </div>
  )
}

export default PresentationPanel
