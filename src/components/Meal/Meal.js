import './Meal.css';

const Meal = (props) => {
    const {strMealThumb,strMeal,strCategory,strArea} = props.meal;
    return (
        <>
         <div className='col col-md-6 col-lg-3'>
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-start ">Name: {strMeal}</h5>
                    <p className="card-text text-start">Category: {strCategory}</p>
                    <p className="card-text text-start">Origin: {strArea}</p>
                    <div className='text-start'>
                        <button onClick={() => props.handleDetails(props.meal)} type="button" class="btn btn-warning">Show Details</button>
                    </div> 
                </div>
            </div>
         </div>  
        </>
        
)};

export default Meal;