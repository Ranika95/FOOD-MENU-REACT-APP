import React from 'react';
import './Details.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Details = (props) => {
    const {strMeal,strInstructions,strYoutube} = props.showDetails;
    return (
        <div className='details'>
            
            <div class="card text-dark bg-light mb-3 w-50">
                <div class="card-header  text-primary">Food Details</div>
                <div class="card-body">
                    <h5 class="card-title text-info">Name: {strMeal}</h5>
                    <p class="card-text text-start">Instructions: {strInstructions}</p>
                    {/* <a className="youtube" href={strYoutube}>
                       <i class="fa-brands fa-youtube"></i>
                       <span className="youtube-text">YouTube</span> 
                    </a> */}
                    <a className='youtube' href={strYoutube}>
                       <FontAwesomeIcon icon="fa-brands fa-youtube" />
                       <span className='youtube-text'>Youtube</span>
                    </a>
                </div>
            </div>  
            
        </div>
    );
};

export default Details;