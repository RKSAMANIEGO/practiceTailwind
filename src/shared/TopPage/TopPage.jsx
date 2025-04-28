import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const TopPage = () => {

    const {pathname} = useLocation()

    useEffect(()=>{
        return window.scrollTo(0,0);
    },[pathname])
    
    return null;

}

export default TopPage
