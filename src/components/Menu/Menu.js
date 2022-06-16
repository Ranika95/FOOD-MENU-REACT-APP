import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Meal from '../Meal/Meal';
import './Menu.css';

const Menu = () => {
    const [meals, setMeals] = useState([]);
    const [showDetails, setShowDetails] = useState([]);
    const [searchInput,setSearchInput] = useState([]);
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    
    const handleDetails = meal => {
        setShowDetails(meal);
    }
    const handleSearch = Event =>{
        let searchText = Event.target.value;
        if(searchText === ''){
            searchText = 's';
        }
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
        .then(res => res.json())
        .then(data => setSearchInput(data.meals))
        
        // const matchedMeal = meals.filter(meal => meal.strMeal.toLowerCase().startsWith(searchText.toLowerCase()));
        // setSearchInput(matchedMeal);
    }

    return (
        <div className='menu-container'>
            <h1>Welcome to BdMeal</h1>
            <input onChange={handleSearch} type="text" placeholder='Search Meal' />
            <div className='meal-container'>
                <div className='row g-4'>
                {
                   meals?.map(meal => <Meal key={meal.idMeal} meal={meal} handleDetails={handleDetails}></Meal>)
                }
                </div>
            </div>
            <div className='details-container'>
                <Details showDetails={showDetails}></Details>
            </div> 
        </div>
    );
};

export default Menu;