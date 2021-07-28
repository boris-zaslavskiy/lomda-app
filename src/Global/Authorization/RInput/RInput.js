import React, {useState} from 'react';

const RInput = (props) => {

    const [inpData, setInpData] = useState(``);


    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        if (value.length > 0){
            // changeValue(inpData, key);
        }
        setInpData(value);
        props.getData(inpData, key);
    }

    return (
        <>
        <input type={props.type} placeholder={props.placeholder} onChange={handleChange} name={props.name}/>
            <span>{props.error}</span>
        </>
    );

}
export default RInput;



//const pattern = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;