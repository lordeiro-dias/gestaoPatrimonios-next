import styles from './datarow-patrimonios.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faBars, faChevronDown, faCircleInfo, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface Patrimonio{
    denominacao: string,
    numeroPatrimonio: string,
    patrimonioID: number
}

const DataRowPatrimonios = ({denominacao, numeroPatrimonio, patrimonioID} : Patrimonio) => {
    return(
        <>
            <tr>
                    <td>{numeroPatrimonio}</td>
                    <td>{denominacao}</td>
                    <td>11/02/26</td>
                    <td>
                        <Link href={"/detalhes-patrimonio/" + patrimonioID}>
                            <FontAwesomeIcon icon={faCircleInfo}/>
                        </Link>
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