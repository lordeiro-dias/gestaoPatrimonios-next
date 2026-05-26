import DataRowLocais from '../datarow-locais/datarow-locais'
import styles from './lista-locais.module.css'

const ListaLocais = () => {
    return(
        <>
        <table className={styles.environmentTable}>
            <thead>
                <tr>
                    <th>Local</th>
                    <th>Responsável</th>
                    <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
                <DataRowLocais/>
                <DataRowLocais/>
                <DataRowLocais/>
                <DataRowLocais/>
            </tbody>
        </table>
        </>
    )
}

export default ListaLocais