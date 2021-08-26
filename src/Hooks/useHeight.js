import {useEffect, useState} from "react";

//Hook check width after changes
export default function useHeight(ref) {

    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(ref.current.offsetHeight + 50);
    }, []);


    return height;
}