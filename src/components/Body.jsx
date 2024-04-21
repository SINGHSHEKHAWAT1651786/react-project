import React from 'react';
import Search from './Search';
import RestaurantCard from './RestaurantCard';
function Body() {
    return (
        <>
            <h1>Restaurants in your area</h1>
            <Search />
            <RestaurantCard/>
        </>
    );
}

export default Body;
