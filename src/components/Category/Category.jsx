import React, { useEffect, useState } from 'react';
import './Category.css'
import List from '../List/List';

const Category = () => {
    const [lists, setLists] = useState([]);

        useEffect(()=>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setLists(data))
        }, []);
        
    return (
        <div className='category-container'>
            <h2>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category-list-container'>
                {
                    lists.map(list => <List key={list.id} list={list}></List>)
                }
            </div>
        </div>
    );
};

export default Category;