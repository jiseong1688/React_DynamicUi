import { getTheme } from "../style/theme";
import { useEffect, useState } from "react"

export const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState(window.matchMedia(getTheme("light").mediaQuery.mobile).matches);

    useEffect(()=>{
        const isMediaquery = window.matchMedia("(max-width: 768px").matches;

        setIsMobile(isMediaquery);
    },[])

    return { isMobile }
}