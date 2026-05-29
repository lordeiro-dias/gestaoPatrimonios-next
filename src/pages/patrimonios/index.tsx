import Header from '@/src/components/header/header'
import styles from './patrimonios.module.css'
import ListaPatrimonios from '@/src/components/lista-patrimonios/lista-patrimonios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

const Patrimonio = () => {
    return(
        <>
            <Header/>
            <main className={styles.pageContent}>
                <section className={`${styles.pageHeader} layout_guide`}>
                    <h1 id="titulo-patrimonios">Patrimônios: Sala 09/10</h1>
                    <form className={styles.searchArea} role="search">
                        <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>
                        Pesquisar patrimônios
                        </label>
                        <input
                        type="search"
                        id="pesquisa-ambiente"
                        name="pesquisaAmbiente"
                        placeholder="Pesquise o ambiente"
                        />
                        <button
                        type="button"
                        className={styles.filterButton}
                        aria-label="Filtrar patrimonios"
                        >
                        <FontAwesomeIcon icon={faSliders}/>
                        </button>
                    </form>
                </section>

                <section className={`${styles.tableSection} layout_guide`} aria-label="Lista de patrimonios">
                    <ListaPatrimonios/>
                </section>
            </main>
        </>
    )
}

export default Patrimonio