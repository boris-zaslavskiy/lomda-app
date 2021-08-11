import React, {useEffect, useState} from 'react';
import styles from './TitleH2.module.css';

const TitleH2 = (props) => {

//Span text changes depending on the props "titleType".  - Alina

    const [firstWord, setFirstWord] = useState('');
    const [nextWord, setNextWord] = useState('');

    useEffect(()=>{
        if(props.titleType === 'h2'){
            let arrTxt = props.title.split(' '); //splits the string at the first space
            let first = arrTxt[0].charAt(0).toUpperCase() + arrTxt[0].slice(1); //capitalizes the first letter of a string

            arrTxt.shift(); //remove first element
            let next = arrTxt.join(' '); //return all elements on string

            setFirstWord(first);
            setNextWord(next);
        }
    },[props.titleType]);

    return (
        <div className={styles.titleH2Block}>
            <h2>
                <span className={styles.titleH2Black}>{firstWord}</span>&ensp;
                <span className={styles.titleH2Orange}>{nextWord}</span>
            </h2>
        </div>
    );
};

export {TitleH2};
