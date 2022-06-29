import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
     const [images, setImages] = useState([])
     const [isLoading, setIsLoading] = useState(true)

     const getImages=async(category)=>{
          const newImgages= await getGifs(category);
          setImages(newImgages)
          setIsLoading(false);
          
     }
     useEffect(()=>{
          getImages(category)
     },[ ]);

  return ({
     images,
     isLoading
  })
}
