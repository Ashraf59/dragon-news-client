import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is a Category: {categoryNews.length}</h2>
            {
                categoryNews.map( newsy => <NewsSummaryCard
                key = {newsy._id}
                news = {newsy}
                
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;