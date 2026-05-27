import { api } from './api'
import secureLocalStorage from "react-secure-storage";
import { pegarToken } from './usuarioService';

export async function login(nif: string, senha: string){
    try{
        const response = await api.post("Autenticacao/login", {nif, senha});

        const token = response.data.token;

        secureLocalStorage.setItem("Token", token);

        pegarToken();

    }
    catch(error: any){
        throw new Error("Email ou senha inválidos");
    }
}