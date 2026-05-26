import styles from './datarow-patrimonios.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
const DataRowPatrimonios = () => {
    return(
        <>
            <tr>
                    <td>1236808</td>
                    <td>MESA TRAPEZOIDAL DC-1987a</td>
                    <td>Mesa</td>
                    <td>11/02/26</td>
                    <td>
                        <a href="#" aria-label="Ver detalhes do patrimonio">
                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </a>
                    </td>
                    <td>
                        <a href="#" aria-label="Transferir patrimonio">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                        </a>
                    </td>
            </tr>
        </>
    )
}

export default DataRowPatrimonios