import React from 'react'

const Tags = ({tagString}) => {
    const tags = tagString.split(',')
    return tags && (<ul className="no-style tags">
    {tags.map(tag => (<li>{tag}</li>))}
  </ul>)
}

export default Tags