import React from 'react';
import './Details.css';

const Details = (props) => {
    const { strMeal, strInstructions, strYoutube } = props.showDetails;
    return (
        <div className='details'>

            <div className="card text-dark bg-light mb-3 w-50">
                <div className="card-header  text-primary">Food Details</div>
                <div className="card-body">
                    <h5 className="card-title text-info">Name: {strMeal}</h5>
                    <p className="card-text text-start">Instructions: {strInstructions}</p>
                    {/* <a className="youtube" href={strYoutube}>
                       <i className="fa-brands fa-youtube"></i>
                       <span className="youtube-text">YouTube</span> 
                    </a> */}
                    <a className='youtube' href={strYoutube}>
                        <span className='youtube-text'>Youtube</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Details;