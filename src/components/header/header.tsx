import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faSliders, faUser } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons/faChevronCircleUp'
import { useEffect, useState } from 'react'
import { pegarToken } from '@/src/pages/api/usuarioService'

interface meuTokenPayLoad{
    email: string,
    nome: string
}

const Header = () => {

    const [usuario, setUsuario] = useState<meuTokenPayLoad | null>(null);

    useEffect(() =>{
        async function carregarDados(){
            const dadosDoToken = await pegarToken();
            if(dadosDoToken){
                setUsuario(dadosDoToken);
            }
        }

        carregarDados();
    },[]);

    return(
        <>
            <header className={styles.topbar}>
                <nav className={`${styles.navbar} layout_guide`} aria-label="Menu principal">
                    <a href="#" className={styles.logoLink} aria-label="Página inicial">
                    <img src="../imgs/Logo Senai.png" alt="Logo SENAI" className={styles.logo} />
                    </a>
                    <ul className={styles.menuList}>
                    <li>
                        <a href="#" className={styles.menuLink}>
                        Ambientes
                        <FontAwesomeIcon icon={faChevronDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.menuLink}>
                        Patrimônios
                        </a>
                    </li>
                    </ul>
                    <section className={styles.userArea} aria-label="Informações do usuário">
                    <button className={styles.userIcon} aria-label="Abrir perfil do usuário">
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                    <div className={styles.userInfo}>
                        <strong>{usuario?.nome || "Carregando..."}</strong>
                        <span>{usuario?.email || "..."}</span>
                    </div>
                    <button className={styles.arrowButton} aria-label="Abrir opções da conta">
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </button>
                    </section>
                    <button className={styles.hamburguer} aria-label="Abrir opções de menu ">
                    <FontAwesomeIcon icon={faBars}/>
                    <i className="fa-solid fa-bars" />
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header