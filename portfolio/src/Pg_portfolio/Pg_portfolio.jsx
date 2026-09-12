import style from './Pg_portfolio.module.css';



const Pg_portfolio = () => {

    const [temaEscuro, setTemaEscuro] = useState(
        () => (localStorage.getItem('TemaSelecionado') || 'Claro') === 'Escuro'
    );

    useEffect(() => {
        const handleTema = (e) => {
        setTemaEscuro(e.detail === 'Escuro');
        };

        window.addEventListener('temaAtualizado', handleTema);
        return () => window.removeEventListener('temaAtualizado', handleTema);
    }, []);

    const dataAtual = new Date().getFullYear();

    return(
        <>
        
        </>
    );
};

export { Pg_portfolio }