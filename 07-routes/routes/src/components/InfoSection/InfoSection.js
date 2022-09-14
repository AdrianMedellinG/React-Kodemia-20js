import React from 'react'
import styles from './InfoSection.module.scss';


function InfoSection(props) {
    let subResult = props.result
if(props.result.includes("https://rickandmortyapi.com/api/episode/")){

    fetch(props.result)
    .then((result) => {result.json()
    .then((result) => subResult=result.name)
        .catch((error) => {
            console.log('Error json', error.message)
        })
    })
    .catch((error) => {
        console.log('error', error.message)
    })
} else {
    subResult = props.result
}

    return (
        <div className={styles.infoSection}>
        <span className={styles.infoTitle}>{props.title}</span>
        <div className={styles.classesSub}>{subResult}</div>
    </div>
    );
}

export default InfoSection;