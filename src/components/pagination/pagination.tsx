import styles from './pagination.module.css'

type PaginationProps = {
    totalPosts: number;
    postsPorPagina: number;
    paginaAtual: number;
    setPaginaAtual: (pagina: number) => void;
}

const Pagination = ({totalPosts, postsPorPagina, paginaAtual, setPaginaAtual}: PaginationProps) => {
    const totalPaginas = Math.ceil(totalPosts / postsPorPagina);

    if (totalPaginas <= 1) return null;

    const paginaAnterior = () => {
        if (paginaAtual > 1) setPaginaAtual(paginaAtual - 1);
    };

    const proximaPagina = () => {
        if (paginaAtual < totalPaginas) setPaginaAtual(paginaAtual + 1);
    };

    const gerarPaginasVisiveis = () => {
        const paginas: (number | string)[] = [];
        const limiteMaximoBotoes = 5; 

        if (totalPaginas <= limiteMaximoBotoes) {

            for (let i = 1; i <= totalPaginas; i++) paginas.push(i);
        } else {

            paginas.push(1);

            let inicio = Math.max(2, paginaAtual - 1);
            let fim = Math.min(totalPaginas - 1, paginaAtual + 1);


            if (paginaAtual <= 2) {
                fim = 4;
            } else if (paginaAtual >= totalPaginas - 1) {
                inicio = totalPaginas - 3;
            }


            if (inicio > 2) {
                paginas.push('...');
            }


            for (let i = inicio; i <= fim; i++) {
                paginas.push(i);
            }


            if (fim < totalPaginas - 1) {
                paginas.push('...');
            }

            paginas.push(totalPaginas);
        }

        return paginas;
    };

    const paginasVisiveis = gerarPaginasVisiveis();

    return(
        <>
            <nav className={styles.pagination} aria-label="Paginação">
                    <button
                        type="button"
                        className={styles.paginationButton}
                        aria-label="Página anterior"
                        onClick={paginaAnterior}
                        disabled={paginaAtual === 1}
                    >
                        ‹
                    </button>
                    {paginasVisiveis.map((pagina, index) => {
                        if (pagina === '...') {
                            return (
                                <span key={`ellipsis-${index}`} className={styles.paginationEllipsis} style={{ padding: '0 8px', alignSelf: 'center' }}>
                                    ...
                                </span>
                            );
                        }

                        const isCurrent = pagina === paginaAtual;
                        return (
                            <button
                                key={pagina}
                                type="button"
                                onClick={() => setPaginaAtual(Number(pagina))}
                                className={`${styles.paginationLink} ${isCurrent ? styles.current : ''}`}
                                aria-current={isCurrent ? "page" : undefined}
                            >
                                {pagina}
                            </button>
                        );
                    })}
                    <button
                        type="button"
                        className={styles.paginationButton}
                        aria-label="Próxima página"
                        onClick={proximaPagina}
                        disabled={paginaAtual === totalPaginas}
                    >
                        ›
                    </button>
                </nav>
        </>
    )
}

export default Pagination;