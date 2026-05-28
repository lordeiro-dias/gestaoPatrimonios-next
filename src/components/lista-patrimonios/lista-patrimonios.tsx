import { useEffect, useState } from 'react'
import DataRowPatrimonios from '../datarow-patrimonios/datarow-patrimonios'
import styles from './lista-patrimonios.module.css'
import { ListarPatrimonio } from '@/src/pages/api/patrimonioService'

type Patrimonio = {
    patrimonioID: number,
    denominacao: string,
    numeroPatrimonio: string
}

const ListaPatrimonios = () => {
    
    const[patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);

    async function listar(){
        try{
            const lista = await ListarPatrimonio();
            setPatrimonios(lista);
        }
        catch(error: any){
            console.log(error.message)
        }
    }

    useEffect(() =>{
        listar();
    })
    
    return(
        <>
        <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>
                        <th>Data transfêrencia</th>
                        <th>Detalhes</th>
                        <th>Transferir</th>
                    </tr>
                </thead>

                <tbody>
                    {patrimonios.length > 0 ? patrimonios.map((item) => (
                        <DataRowPatrimonios
                            key={item.patrimonioID}
                            patrimonioID={item.patrimonioID}
                            denominacao={item.denominacao}
                            numeroPatrimonio={item.numeroPatrimonio}
                        />           

                    )) : (
                        <tr>
                            <th>Carregado patrimônios...</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ListaPatrimonios