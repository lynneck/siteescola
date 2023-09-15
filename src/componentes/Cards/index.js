import React from 'react'
import styles from './Cards.module.css'

export default function Cards() {
    return (
        <div>
            <div className={styles.titulo}>
                <h2>Horários Disponíveis</h2>
            </div>
            <div className={styles.titulo__subtitulo}>
                <div className={styles.titulo__subtitulo__cards} > 
                    <h3>Educação Infantil </h3>
                    <p>07:30 h às 09:30 h  </p>
                    <p>09:40 h às 11:40 h  </p>
                </div>
                <div className={styles.titulo__subtitulo__cards}> 
                    <h3>Ensino Fundamental</h3>
                    <p> 14:00 h às 16:00 h  </p>
                    <p> </p>
                </div>

            </div>


        </div>

    )
}

