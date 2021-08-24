import {useEffect, useState} from "react";

//Hook check width after changes
export default function useWidth() {

    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    return width;
}