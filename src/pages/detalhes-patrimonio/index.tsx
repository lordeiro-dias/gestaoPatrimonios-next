import Header from '@/src/components/header/header'
import styles from './detalhes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import ListaHistorico from '@/src/components/lista-historico/lista-historico'

const DetalhesPatrimonio = () => {
    return(
        <>
            <Header/>
            <main className={styles.pageContent}>
                <section
                className={`${styles.pageDetalhes} layout_guide`}
                aria-labelledby="titulo-patrimonio"
                >
                    <a href="#" className={styles.backLink}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                        Voltar
                    </a>
                    <h1 id={styles.tituloPatrimonio}>Patrimônio: 1236808</h1>
                    <article className={styles.patrimonioCard}>
                        <div className={styles.patrimonioContent}>
                        <dl>
                            <dt>Denominação</dt>
                            <dd>NOTEBOOK ALTO DESEMPENHO P/ GAMER</dd>
                        </dl>
                        <dl>
                            <dt>Tipo</dt>
                            <dd>Mesa</dd>
                        </dl>
                        <dl>
                            <dt>Data transferência</dt>
                            <dd>
                            <time dateTime="2026-02-09">09/02/2026</time>
                            </dd>
                        </dl>
                        <dl>
                            <dt>Local Atual</dt>
                            <dd>Sala 09/10</dd>
                        </dl>
                        <dl>
                            <dt>Status Atual</dt>
                            <dd>Ativo</dd>
                        </dl>
                        </div>
                    </article>
                </section>

                <section className={`${styles.tableSection} layout_guide`} aria-label="Lista de histórico do patrimônio">
                    <h2>Histórico</h2>
                    <ListaHistorico/>
                </section>
            </main>
        </>
    )
}

export default DetalhesPatrimonio