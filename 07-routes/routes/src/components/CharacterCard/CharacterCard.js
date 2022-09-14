import React from 'react'
import axios from "axios";
import styles from './CharacterCard.module.scss';
import InfoSectionTitle from "../InfoSectionTitle/InfoSectionTitle";
import InfoSection from "../InfoSection/InfoSection";


const baseURL = "https://rickandmortyapi.com/api/character/";
function CharacterCard(props) {
  const [cards, setCards] = React.useState(null);
  const [lastEpisode, setLastEpisode] = React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL + props.characterId).then((response) => {
      setCards(response.data);
    });
  }, [props.characterId]);
  React.useEffect(() => {
    if (cards?.episode) {
      axios.get(cards.episode[0]).then((response) => {
        setLastEpisode(response.data.name);
      }); 
    }

  }, [cards?.episode]);
  console.log(lastEpisode)

  if (!cards || !lastEpisode) return null;

  return (

    <div className={`${styles.characterCard} ${styles.flexColumn}`}  key={cards.id}>
      <div className={styles.characterImg}>
        <img src={cards.image} alt={cards.name} />
      </div>
      <div className={styles.info}>
        <InfoSectionTitle name={cards.name} status={cards.status} species={cards.species} characterId={cards.id} />
        <InfoSection title="Gender:" result={cards.gender} />
        <InfoSection title="Origin:" result={cards.origin.name} link={cards.origin.link} />
        <InfoSection title="Last know location:" result={cards.location.name} link={cards.location.link} />
        <InfoSection title="First seen in:" result={lastEpisode} />

      </div>
    </div>

  );
}

export default CharacterCard;