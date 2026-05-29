import { useEffect, useState } from 'react'
import DataRowLocais from '../datarow-locais/datarow-locais'
import styles from './lista-locais.module.css'
import { listarLocalizacao } from '@/src/pages/api/localizacaoService'

interface Localizacao{
    localizacaoID: number,
    nomeLocal: string,
    areaID: number,
    nomeArea: string
}



const ListaLocais = () => {

    const [locais, setLocais] = useState<Localizacao[]>([]);

    async function listarAmbientes(){
        try{
            const lista = await listarLocalizacao();
            setLocais(lista);
        }
        catch(error: any){
            console.log(error.message);
        }
    }

    useEffect(() =>{
        listarAmbientes();
    }, [])

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
                {locais.length > 0 ? locais.map((item) => (
                    <DataRowLocais
                    key={item.localizacaoID}
                    localizacaoID={item.localizacaoID}
                    nomeLocal={item.nomeLocal}
                    nomeArea={"teste"}
                    areaID={item.areaID}
                    />
                )) : (
                        <tr>
                            <th>Carregado Ambientes...</th>
                        </tr>
                    )}
            </tbody>
        </table>
        </>
    )
}

export default ListaLocais