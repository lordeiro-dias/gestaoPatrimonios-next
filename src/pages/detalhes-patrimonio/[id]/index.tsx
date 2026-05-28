import Header from '@/src/components/header/header'
import styles from './detalhes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import ListaHistorico from '@/src/components/lista-historico/lista-historico'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ListarPorId } from '../../api/patrimonioService'

type Patrimonio = {
    patrimonioID: number,
    denominacao: string,
    numeroPatrimonio: string,
    statusPatrimonioID: number,
    statusPatrimonio: string, 
    localNome: string
}

const DetalhesPatrimonio = () => {

    const [patrimonio, setPatrimonio] = useState<Patrimonio>();

    const params = useParams();

    const id = params?.id;

    async function listagemPatrimonio(){
        try{
            const response = await ListarPorId(String(id));
            console.log(response);
            setPatrimonio(response);
        }
        catch(error: any){
            console.log(error.message);
        }
    }

    useEffect(() =>{
        if(!id) return;

        setTimeout(() =>{
            listagemPatrimonio();
        }, 1000)
    }, [id])

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
                    <h1 id={styles.tituloPatrimonio}>Patrimônio: {patrimonio?.numeroPatrimonio}</h1>
                    <article className={styles.patrimonioCard}>
                        <div className={styles.patrimonioContent}>
                        <dl>
                            <dt>Denominação</dt>
                            <dd>{patrimonio?.denominacao}</dd>
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
                            <dd>{patrimonio?.localNome}</dd>
                        </dl>
                        <dl>
                            <dt>Status Atual</dt>
                            <dd>{patrimonio?.statusPatrimonio}</dd>
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