import React, {useState } from 'react';
import styles from './SearchInput.module.css';
import { subjects } from '../../../Utils/constants';

const SearchInput = (props) => {
    console.log(props.data);
    const [search, setSearch] = useState('');
    const [option, setOption] = useState('');
    const handleChange = (search) => {
        console.log(search);
        setSearch('');
    }
    const handleChangeOption = (option) => {
        setOption(option);
        console.log(option)
    }
    return (
        <div  className='w-100'>
            {props.data?
                <div className={`${styles.input_group}`} style={{minHeight: '40px'}}>
                    <input type="text"
                           className={`${styles.greenInput}`}
                           placeholder="World Literature"
                           aria-label="Text input with dropdown button"
                           value={option}
                    />
                    <button className={` ${styles.greenBtn}`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">{props.title}</button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {props.data.map((item, key)=><li key={key} className='dropdown-item'
                                                       onClick={()=> {handleChangeOption(item)}}><a>{item}</a></li>)}
                    </ul>
                </div>

                :

                <div className={`${styles.input_groupOrange}`} style={{minHeight: '40px'}}>
                    <input type="text"
                           className={`${styles.orangeInput}`}
                           placeholder="Type title here..."
                           aria-label="Type title here..."
                           aria-describedby="button-addon2"
                           value={search}
                           onChange={(event)=>setSearch(event.target.value)}/>
                    <div type="button"
                         className={` ${styles.orangeBtn} d-flex justify-content-center align-items-center`}
                         id="button-addon2"
                         onClick={()=>handleChange(search)}
                    >{props.title}</div>
                </div>
            }

        </div>
    );
};

export default SearchInput;