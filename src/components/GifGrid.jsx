/* eslint-disable react/prop-types */
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    //TODO:USANDO CUSTOM HOOK
    const {images,isLoading}=useFetchGifs(category);
    console.log({images,isLoading});  

    return (
        <>
            <h3>{category}</h3>
            {/* //TODO: METODO 1:   PARA MOSTRAR LOADING  */}
            {/* {
                isLoading
                ?(<h2>Cargando...</h2>)
                :null
            } */}
            {/* //TODO: METODO 2: PARA MOSTRAR LOADING */}
            {
                // CON UN AND LOGICO
                // FALSE && TRUE
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {/* //TODO: METODO 1 */}
                {/* {
                    images.map((img)=>(
                        <li key={img.id}>  
                            <img src={img.url} alt="gif"/>  
                            {img.title}
                        </li> 
                    ))
                } */}
                
                {/* //TODO: METODO 2 : USANDO DESESTRUCTURACION */}
                {/* {
                    images.map(({id,title})=>(
                        // <li key={id}> 
                        //     {title}
                        // </li> 
                        <GifItem key={id} title={title}></GifItem>
                    ))
                } */}
                {/* //TODO: METODO 3 : ENVIANDO EL OBJETO*/}
                {/* {
                    images.map((image)=>(
                        // <li key={id}> 
                        //     {title}
                        // </li> 
                        <GifItem key={image.id} title={image.title} url={image.url}/>
                    ))
                } */}
                {/* //TODO: METODO 4 : USANDO EL OPERADOR SPREAD*/}
                {
                    images.map((image)=>(
                        // <li key={id}> 
                        //     {title}
                        // </li> 
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
}


