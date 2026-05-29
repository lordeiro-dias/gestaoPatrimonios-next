import { useEffect, useState } from 'react'
import DataRowPatrimonios from '../datarow-patrimonios/datarow-patrimonios'
import styles from './lista-patrimonios.module.css'
import { ListarPatrimonio } from '@/src/pages/api/patrimonioService'
import Pagination from '../pagination/pagination'

type Patrimonio = {
    patrimonioID: number,
    denominacao: string,
    numeroPatrimonio: string
}

const ListaPatrimonios = () => {
    
    const[patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);
    const[paginaAtual, setPaginaAtual] = useState(1);
    const[postPorPagina, setPostPorPagina] = useState(20);

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
    }, []);

    const ultimoPostIndex = paginaAtual * postPorPagina;
    const primeiroPostIndex = ultimoPostIndex - postPorPagina;
    const postAtual = patrimonios.slice(primeiroPostIndex, ultimoPostIndex);
    
    return(
        <>
        <table className={styles.environmentTable}>
                <thead>
                    <tr>
                        <th>Patrimônio</th>
                        <th>Denominação</th>    
                        <th>Detalhes</th>
                        <th>Transferir</th>
                    </tr>
                </thead>

                <tbody>
                    {postAtual.length > 0 ? postAtual.map((item) => (
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
            <Pagination
                totalPosts={patrimonios.length}
                postsPorPagina={postPorPagina}
                paginaAtual={paginaAtual}
                setPaginaAtual={setPaginaAtual}
            />
        </>
    )
}

export default ListaPatrimonios