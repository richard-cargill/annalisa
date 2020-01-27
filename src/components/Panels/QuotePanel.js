import React from 'react'

const HeaderPanel = ({ text }) => {
  return (
    <section className="panel container quotePanel limit-width">
      <div>{text}</div>
    </section>
  )
}

export default HeaderPanel
