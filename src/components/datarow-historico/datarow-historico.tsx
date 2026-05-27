import styles from './datarow-historico.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'

const DataRowHistorico = () => {
    return(
        <>
            <tr>
                <td data-label="Data">11/02/2026</td>
                <td data-label="Tipo de movimentação">
                    <span className={styles.statusBadge}>Transferência</span>
               </td>
                <td data-label="Origem">Sala 07/08</td>
                <td data-label="Destino">Sala 09/10</td>
                <td data-label="Responsável">Gustavo Lima</td>
                <td data-label="Justificativa">
                    <a href="#" aria-label="Ver justificativa da transferência">
                        <FontAwesomeIcon icon={faCircleInfo}/>
                    </a>
                </td>
            </tr>
        </>
    )
}

export default DataRowHistorico