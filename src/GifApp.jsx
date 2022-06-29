import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


export const GifApp = () => {

     const [categories, setCategories] = useState(['Naruto']);

     const onAddCategory=( newCategory )=>{

         if (categories.indexOf(newCategory,0)==-1) setCategories([newCategory,...categories])

     }


  return <>
  
  <h1>Gif App</h1>

  <AddCategory onNewCategory={ onAddCategory }/>

   {
      categories.map((category)=>(
               <GifGrid category={ category } key = {category}/>
            )
      )
   }

  </>
}
