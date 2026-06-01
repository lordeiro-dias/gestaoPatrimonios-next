import { api } from './api'

interface PatrimonioListagem{
    patrimonioID: number,
    denominacao: string,
    numeroPatrimonio: string,
    localizacaoID: number,
    statusPatrimonioID: number
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

export async function ListarPorId(id: string){
    try{
        const response = await api.get("Patrimonio/" + id);
        
        const patrimonios = {
            ...response.data
        };

        return patrimonios;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function importarPatrimonioCsv(arquivo: File){
    try{    
        const formData = new FormData();

        formData.append("arquivoCsv", arquivo);

        await api.post("Patrimonio/importar-csv", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
    catch(error: any){
        throw new Error(error.response?.data);
    }
}