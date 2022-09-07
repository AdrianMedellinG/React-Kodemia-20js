import React, { useState } from "react";
import styles from './Calculadora.module.css'; 

const Calculadora = (props) => {
    const [number, setFinal] = useState(props.number);
    const isDisabled = number === 0
    const plus = () => setFinal(number + 1)
    const rest = () => setFinal(number - 1)

    return (
        <div>
            <div className={styles.number}>{number}</div>
            <button className={styles.plusButton} onClick={plus}>Sumar</button>
            <button className={styles.restButton}onClick={rest} disabled={isDisabled}>Restar</button>
        </div>
    )
}

export default Calculadora