/* eslint-disable react/prop-types */
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const[inputValue,setInputValue]=useState('')

    const onInputChange=(event)=>{
        //console.log(event.target.value)
        setInputValue(event.target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        // console.log(inputValue);
        if(inputValue.trim().length<=1){
            return;
        }
        //setCategories(categories=>[inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');//LIMPIA
    }
    return (
        //toma el event y lo manda a la funcion event
        // se puede resumir tambien con colocar solo onSubmit
        <form onSubmit={(event)=>onSubmit(event)}>
            <input type="text" 
            placeholder="Search gifs" 
            value={inputValue}
            onChange={(event)=>onInputChange(event)}
            />
        </form>
        
    )
}
