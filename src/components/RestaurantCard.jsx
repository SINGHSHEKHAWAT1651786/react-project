import React from 'react';

function RestaurantCard() {
    return (
        <div className="resturant-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7" alt="Restaurant" width="200px" height="200px" /> {/* Added alt attribute for accessibility */}
            <h2>Pizza hut</h2>
            <h2>4.2*</h2>
            <h2>30-35mins</h2>
            <h2>Pizzas</h2>
            <h2>Rajnagar</h2>
        </div>
    );
}

export default RestaurantCard;
