import React from 'react'
import { Link } from 'react-router-dom'
import styles from './InfoSectionTitle.module.scss';

function InfoSectionTitle(props) {
    
    return (
        <div className={styles.infoSection}>
            {props.characterId && <Link to={{pathname: `/characters/${props.characterId}`}}><h2 className={styles.title}>{props.name}</h2></Link>}
            {!props.characterId && <h2 className={styles.title}>{props.name}</h2>}
            {props.status === "Alive" && <span className={styles.status}><span className={styles.statusAlive}></span>{props.status} - {props.species}</span>}
            {props.status === "Dead" && <span className={styles.status}><span className={styles.statusDead}></span>{props.status} - {props.species}</span>}
            {props.status === "unknown" && <span className={styles.status}><span className={styles.statusUnknown}></span>{props.status} - {props.species}</span>}
        </div>

    );
}

export default InfoSectionTitle;