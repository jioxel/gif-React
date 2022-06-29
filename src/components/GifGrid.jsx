import { useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

   const {images, isLoading}=useFetchGifs( category );

   

  return (
     <>
          <h2 >{ category }</h2>
          {
            isLoading && (<h3>Cargando...</h3>)
          }
          
         <div className="card-grid">
            {
               images.map((img)=>(
                  <GifItem 
                     key={img.id} 
                     { ...img }
                     />
               ))
            }
         </div>
     </>
  )
}
