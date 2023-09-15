import React from 'react'
import Logo from './logoEscola.png'

import styles from './cabecalho.module.css'

import MenuLink from 'componentes/MenuLink'

export default function Cabecalho() {
    
    return (
        <header className={styles.cabecalho}>
            
                <div >
                    
                  <img src={Logo} alt='logo3' className={styles.logoImg}  /> 

                </div>
            
                <nav className={styles.cabecalho__Link}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/professor">
                       Informação sobre o professor
                    </MenuLink>
                    <MenuLink to="/sobrenos">
                       Sobre Nós
                    </MenuLink>
                    <MenuLink to="/contatos">
                       Contatos
                    </MenuLink>
                    <MenuLink to="/login">
                       Aréa restrita
                    </MenuLink>

        
                </nav>

           


        </header>

    )
}
