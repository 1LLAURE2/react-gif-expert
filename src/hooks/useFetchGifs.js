import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images,setImages]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    const getImages=async()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages();
        //getGifs(category);
        // getGifs(category).then(newImages=>setImages(newImages));
    },[])

    return {
        images:images,//como es el mismo nombre, basta con colocar images solamente
        isLoading:isLoading
    }
    
}

