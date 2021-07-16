import React from 'react';
import styles from './TextBar.module.css';

const TextBar = (props) => {

    return (
        <div>
            <div className={styles.progressBarSpan}>
                <span>{props.text}</span>
                {(props.flag === 'CourseCard')?
                    (<span>{props.currentCount} <i className="fa fa-user"/></span> ):null
                }{/*the number changes from the database*/}
            </div>
        </div>
    );
};

export {TextBar};
