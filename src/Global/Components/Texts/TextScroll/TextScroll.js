import React from 'react';
import styles from '../TextScroll/TextScroll.module.css';

const TextScroll = ({text, height}) => {
    //Component is for using in pages with lessonsTo add a new text, add props "text" to your component. - Lera
    return (
        <div className={`${styles.scroll}  ${styles.scrollOuterShadow}`} style={{minHeight:height}}>
            <p className={`p-3 pb-0 m-0 `}>{text}</p>
            <div className={`${styles.scrollInnerShadow} `}/>
        </div>
    );
};

export default TextScroll;
