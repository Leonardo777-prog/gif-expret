import React, { useEffect, useState } from 'react'

import { useGif } from '../hooks/useGif'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])
  // // si yod ejop la dep vacias esto solo se renderizara solo cunado se inizaliza el componenete

  // const getImages = async () => {
  //   const res = await getGif(category)
  //   setImages(res)
  // }

  // useEffect(() => {
  //   // podemos hacerlo asi
  //   // getGif(category).then((res) => {
  //   //   setImages(res)
  //   // })
  //   getImages()
  // }, [])

  // extraemos la logica

  const { isLoading, images } = useGif(category)

  if (isLoading) return <p>Cargando</p>

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando</h2>}

      <div className="card-grid">
        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  )
}
