import React from 'react'
import banner from './banner.png'
import banner1 from './banner1.png'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.principal}>
        <h1>Matriculas abertas</h1>  
       
        <img className={styles.bannerImg} src={banner1} alt='imagem do banner1' />
    </div>
  )
}
