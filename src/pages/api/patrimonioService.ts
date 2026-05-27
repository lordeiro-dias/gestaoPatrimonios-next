import { api } from './api'

interface PatrimonioListagem{
    patrimonioID: number,
    denominacao: string,
    numeroPatrimonio: string,
    localizacaoID: number,
    statusPatrimonioID: number
}

interface dataTransferenciaPatrimonio{
    dataTransferencia: string
    patrimonioID: number
}

export async function ListarPatrimonio(){
    try{
        const response = await api.get("Patrimonio");
        
        const patrimonios = response.data.map((item : PatrimonioListagem) => ({
            ...item
        }))

        return patrimonios
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}
