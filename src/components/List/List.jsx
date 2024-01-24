import React from 'react';
import './List.css'

const List = ({list}) => {
    const {logo, category_name, availability} = list;
    return (
        <div className='list-container'>
            <img src={logo} alt="" />
            <h3>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default List;