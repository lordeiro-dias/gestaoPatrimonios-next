import styles from './datarow-locais.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'

const DataRowLocais = () => {
    return(
        <>
        <tr>
            <td>Sala 30/31 (anfiteatro)</td>
            <td>Samanta Melissa</td>
            <td>
                <a href="#" aria-label="Ver detalhes da Sala 30/31">
                    <FontAwesomeIcon icon={faCircleInfo}/>
                </a>
            </td>
        </tr>
        </>
    )
}

export default DataRowLocais