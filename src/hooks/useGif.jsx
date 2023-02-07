import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs"

export const useGif = ( category ) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getImages = async () => {
    const res = await getGif(category)
    setImages(res)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    isLoading,
    images
  }
}
