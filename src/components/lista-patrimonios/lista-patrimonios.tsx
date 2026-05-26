import DataRowPatrimonios from '../datarow-patrimonios/datarow-patrimonios'
import styles from './lista-patrimonios.module.css'

const ListaPatrimonios = () => {
    return(
        <>
        <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>
                        <th>Tipo</th>
                        <th>Data transfêrencia</th>
                        <th>Detalhes</th>
                        <th>Transferir</th>
                    </tr>
                </thead>

                <tbody>
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                    <DataRowPatrimonios/>                    
                </tbody>
            </table>
        </>
    )
}

export default ListaPatrimonios