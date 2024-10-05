import { useEffect, useState } from "react"

const useLocalStorage = <T>(key:string, value:T) =>{
    const [state, setState] = useState<T>()
    
    const handleRenderLocalStorage = () =>{
        const storage = window.localStorage.getItem(key)
        if(storage){
            setState(JSON.parse(storage))
            return
        }
        if(!value){
            return
        }
        if(!storage){
            window.localStorage.setItem(key, JSON.stringify(value))
            setState(value)
            return
        }
    }
    // const setValue = (someValue:T) =>{
    //     try {
    //         if(typeof someValue === 'function'){
    //             const valueToStore =         
    //         }
    //     } catch (error) {
            
    //     }
    // }
    useEffect(()=>{
        handleRenderLocalStorage()
    },[])

    return[state, setState]
}

export default useLocalStorage