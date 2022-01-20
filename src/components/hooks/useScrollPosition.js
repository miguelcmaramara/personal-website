import {useState, useEffect} from 'react'

function getScrollPosition(){
    return window.scrollY;
}

function useScrollPosition(){
    // Create Scroll variable
    const [scroll, setScroll] = useState(getScrollPosition);

    // Create Scroll listener
    useEffect(() =>{
        // TODO: get rid of this console.log
        console.log("scroll listener added")
        window.addEventListener("scroll", () => {
            setScroll(getScrollPosition());
            console.log("1: " + getScrollPosition());
            console.log("2: " + window.ScrollY);
        })
    }, [])

    // return scroll position
    return scroll;
}

export default useScrollPosition;