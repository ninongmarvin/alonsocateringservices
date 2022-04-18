import '../styles/FoodSelection.css';
import {useState} from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai';

const FoodSelection = ({s}) => {
  const [food, setFood] = useState(4);
  const moreFood = () => {
    setFood(food + 4);
  };

  const lessFood = () => {
    setFood(food - 4);
  };

  return (
    <div className="food-selection">
      <h1>{s.type}</h1>
      <div className="food-container">
        {
          s.menu.slice(0, food).map((men)=>(
            <div className="food-cards">
              <img src={men.image} alt={men.name}/>
              <div className="food-desc">
                <h4>{men.name}</h4>
                <p>&#8369;{men.price}</p>
              </div>
            </div>
          ))
        }
        <div className={food >= s.menu.length ? "hide-food" : "more-food"} onClick={moreFood}>
          <div className="left-food"></div>
          <div className="food-arrow">
            <p>More</p>
            <p><AiOutlineArrowDown/></p>
          </div>
          <div className="right-food"></div>
        </div>
        <div className={food > s.menu.length ? "less-food" : "hide-food"} onClick={lessFood}>
          <div className="lessLeft-food"></div>
          <div className="lessFood-arrow">
            <p>Less</p>
            <p><AiOutlineArrowUp/></p>
          </div>
          <div className="lessRight-food"></div>
        </div>
      </div>
    </div>
  )
}

export default FoodSelection;
