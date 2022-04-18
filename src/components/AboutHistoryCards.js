import '../styles/AboutHistoryCards.css';
import {useState} from 'react';

const AboutHistoryCards = ({history}) => {
  const [description, setDescription] = useState(false);

  const showDesc = () => {
    setDescription(true);
  }

  const hideDesc = () => {
    setDescription(false);
  }

  return (
    <div className="cards">
      <p>{history.story}</p>
      <div className="history-image" style={{backgroundImage: `url(${history.image})`}} onMouseEnter={showDesc} onMouseLeave={hideDesc}>
        <div className="inlay">
          <div className={description ? "show-desc" : "hide-desc"} id="description">
            <h1>{history.aboutImage}</h1>
            <p>{history.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutHistoryCards;
