import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
 
    useEffect(()=>{
        fetch('https://dragon-news-server-inky-six.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2>All categories: {categories.length}</h2>
            {
                categories.map(category => <p key = {category.id}>
                    <Link to = {`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;