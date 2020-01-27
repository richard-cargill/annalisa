import React from 'react'

const ImagePanel = ({ media, fullWidth, caption }) => {
  const imageClass = `container imagePanel panel ${
    fullWidth !== true ? 'limit-width' : ''
  }`

  if (media && media.file) {
    const { file, description, id } = media
    const captionLabel = caption ? `caption_${id}` : false

    return (
      <section
        className={imageClass}
        role="figure"
        aria-labelledby={captionLabel}
      >
        <img src={file.url} alt={description} className="imagePanel__img" />
        {caption && (
          <span id={captionLabel} className="imagePanel__caption">
            {caption}
          </span>
        )}
      </section>
    )
  } else {
    return null
  }
}

export default ImagePanel
