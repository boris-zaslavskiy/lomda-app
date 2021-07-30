import React, {useState } from 'react';
import styles from './SearchInput.module.css';
import { subjects } from '../../../Utils/constants';

const SearchInput = (props) => {
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
        <div>
            {props.type==='options'?
                <div className={`${styles.input_group}`}>
                    <input type="text"
                           className={`${styles.greenInput}`}
                           placeholder="World Literature"
                           aria-label="Text input with dropdown button"
                           value={option}
                    />
                    <button className={` btn-outline-secondary  ${styles.greenBtn}`}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">Choose a Subject</button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {subjects.map((item, key)=><li key={key} className='dropdown-item'
                                                       onClick={()=> {handleChangeOption(item)}}><a>{item}</a></li>)}
                    </ul>
                </div>

                :

                <div className={`${styles.input_groupOrange}`}>
                    <input type="text"
                           className={`${styles.orangeInput}`}
                           placeholder="Type title here..."
                           aria-label="Type title here..."
                           aria-describedby="button-addon2"
                           value={search}
                           onChange={(event)=>setSearch(event.target.value)}/>
                    <div type="button"
                         className={`btn-outline-secondary ${styles.orangeBtn}`}
                         id="button-addon2"
                         onClick={()=>handleChange(search)}
                    >Search</div>
                </div>
            }

        </div>
    );
};

export default SearchInput;