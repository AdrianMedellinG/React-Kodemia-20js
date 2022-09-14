import React from 'react'
import axios from "axios";
import styles from '../Locations/Locations.module.scss';
import InfoSectionTitle from "../InfoSectionTitle/InfoSectionTitle";
import InfoSection from "../InfoSection/InfoSection";

const baseURL = "https://rickandmortyapi.com/api/location/";
function Locations() {
  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCards(response.data.results);
    });
  }, []);

  if (!cards) return null;

    return (
        
        <div className={styles.cards}>{cards.map((card) => {
            return (<div className={styles.characterCard} key={card.id}>
                <div className={styles.info}>
                <InfoSectionTitle name={card.name}/>
                <InfoSection title="Planet" result={card.type} />
                <InfoSection title="Dimension" result={card.dimension} />
                </div>
            </div>)
        })}</div>
    );
}

export default Locations;