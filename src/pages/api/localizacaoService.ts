import { api } from './api'

interface LocalizacaoListagem{
    localizacaoID: number,
    nomeLocal: string,
    areaID: number
}

export async function listarLocalizacao(){
    try{
        const response = await api.get("Localizacao");

        const localizacoes = response.data.map((item : LocalizacaoListagem) => ({
            ...item
        }))

        return localizacoes;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}