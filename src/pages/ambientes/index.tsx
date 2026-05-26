import Header from '@/src/components/header/header'
import styles from './ambientes.module.css'
import ListaLocais from '@/src/components/lista-locais/lista-locais'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

const Ambientes = () => {
    return(
        <>
        <Header/>
        <main className={styles.pageContent}>
            <section
                className={`${styles.pageHeader} layout_guide`}
                aria-labelledby="titulo-ambientes"
                >
                <h1 id="titulo-ambientes">Ambientes</h1>
                <form className={styles.searchArea} role="search">
                    <label htmlFor="pesquisa-ambiente" className={styles.srOnly}>
                    Pesquisar ambiente
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
                    aria-label="Filtrar ambientes"
                    >
                    <FontAwesomeIcon icon={faSliders}/>
                    </button>
                </form>
            </section>

            <section
                className={`${styles.tableSection} layout_guide`}
                aria-label="Lista de ambientes"
            >
                <ListaLocais/>
            </section>
        </main>
        </>
    )
}

export default Ambientes