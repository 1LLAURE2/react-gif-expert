import { useState } from "react"
//TODO: SIN USAR ARCHIVO BARRIL
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
//TODO: USANDO ARCHIVO BARRIL
import {AddCategory,GifGrid } from "./components";

// 3OHK3ggknQ9K5W3vBzOp6ETePJrhphe8
//api.giphy.com/v1/gifs/search?api_key=3OHK3ggknQ9K5W3vBzOp6ETePJrhphe8
export const GifExpertApp = () => {
    const[categories,setCategories]=useState(['Dragon Ball']);//,'Dragon Ball'
    console.log(categories)
    const onAddCategory=(newCateogry)=>{
        //
        if(categories.includes(newCateogry)){
            return;
        }
        setCategories([newCateogry,...categories]);
        //setCategories(cat=>[...cat,'Valorant']);
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} // setCategories:ƒ bound dispatchSetState() {}
                onNewCategory={(value)=>onAddCategory(value)}// onNewCategory:ƒ onNewCategory() {}

            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
          
                {
                    // categories.map((category)=>{
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map((category)=>(<GifGrid key={category} category={category}></GifGrid>))
                }
            
                {/* Git Item */}
        </>
    )
}

