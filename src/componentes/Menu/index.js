import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <div className= {styles.menu}>
        <h2>Infomações</h2>
        <ul  className= {styles.menu__lista}>
            <li>
                <a>Harários da semana</a>
            </li>
            <li>
                <a>Eventos</a>
            </li>
            <li>
                <a>Depoimentos</a>
            </li>
            <li>
                <a>Por que escolher o reforço cantinho do saber</a>
            </li>
        </ul>

    </div>
  )
}

