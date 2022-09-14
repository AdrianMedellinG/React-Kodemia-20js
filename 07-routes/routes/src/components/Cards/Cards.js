import React from 'react'
import axios from "axios";
import styles from './Cards.module.scss';
import InfoSectionTitle from "../InfoSectionTitle/InfoSectionTitle";
import InfoSection from "../InfoSection/InfoSection";


function Cards() {
  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      setCards(response.data.results);
    });
  }, []);

  if (!cards) return null;

  return (
        <div className={styles.cards}>{cards.map((card) => {
            return (<div className={styles.characterCard} key={card.id}>
                <div className={styles.characterImg}>
                    <img src={card.image} alt={card.name} />
                </div>
                <div className={styles.info}>
                    <InfoSectionTitle name={card.name} status={card.status} species={card.species} characterId={card.id} />
                    <InfoSection title="Last known location:" result={card.location.name}/>
                    <InfoSection title="First seen in:" result={card.episode[0]} />
                </div>
            </div>)
        })}</div>
    );
}

export default Cards;