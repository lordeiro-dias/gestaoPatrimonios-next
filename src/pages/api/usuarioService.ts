import secureLocalStorage from 'react-secure-storage';
import { jwtDecode } from "jwt-decode";

interface meuTokenPayLoad{
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string
}

export async function pegarToken(){
    const token = secureLocalStorage.getItem("Token") as string;
    
    if(token){
        const decoded = jwtDecode<meuTokenPayLoad>(token);
        return {
            email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            nome: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
        }
    }
    else{
        console.log("Token não encontrado");
        return null;
    }
}
