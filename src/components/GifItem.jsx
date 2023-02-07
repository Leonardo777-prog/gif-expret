import React from 'react'

export const GifItem = ({ url, alt,title }) => {
  return (
    <div className="card">
      <img src={url} alt={alt} loading='lazy'/>
      <p>{title}</p>
    </div>
  )
}
