import '../styles/Food.css';
import FoodSelection from '../components/FoodSelection';
import {FoodMenu} from '../helpers/FoodMenu';
import foods from '../assets/foods.jpg';

const Food = () => {
  return (
    <>
      <div className="food-banner" style={{backgroundImage: `url(${foods})`}}>
        <div className="food-containers">
          <h1>With our wide range of food selection, you will surely be able to find what your event needs!</h1>
          <p>Let your eyes feast now, and fill your bellies later.</p>
        </div>
      </div>
      <div className="food">
        {FoodMenu.map((select, key)=>{
          return (
            <FoodSelection s={select}/>
          )
        })}
      </div>
    </>
  )
}

export default Food;
