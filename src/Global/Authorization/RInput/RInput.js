import React, {useState} from 'react';

const RInput = ({type, placeholder}) => {

    const [inpData, setInpData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        console.log(e.target.name);
        setInpData({...inpData, [key]:value});
    }


    return (
        <>
        <input type={type} placeholder={placeholder} onChange={handleChange}/>
        </>
    );

}
export default RInput;