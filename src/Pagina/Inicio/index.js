import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import styles from 'Pagina/Inicio/PaginaInicial.module.css'
import Rodape from '../../componentes/Rodape'
import Banner from '../../componentes/Banner'
import Menu from '../../componentes/Menu'
import Cards from 'componentes/Cards'


export default function PaginaInicial() {
  return (
   
      <>
        
        <main >
          <section  className={styles.menu}>
            
            <Menu />
            <Banner />
           
          </section>
          <section>
          <div >
              <Cards />
            </div>
          </section>
        </main>
      
      </>
      

   
    
  )
}
