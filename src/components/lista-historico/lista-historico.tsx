import DataRowHistorico from '../datarow-historico/datarow-historico'
import styles from './lista-historico.module.css'

const ListaHistorico = () => {
    return(
        <>
            <table className={styles.historyTable}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo de movimentação</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Responsável</th>
                        <th>Justificativa</th>
                    </tr>
                </thead>
                <tbody>
                    <DataRowHistorico/>
                    <DataRowHistorico/>
                    <DataRowHistorico/>
                </tbody>
            </table>
        </>
    )
}

export default ListaHistorico