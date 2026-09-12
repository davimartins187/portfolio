import { useState, useEffect } from 'react';
import luaIcon from '../imagens/lua_icon.svg';
import solIcon from '../imagens/sol_icon.svg';
import Style from "./Tema.module.css";

const Tema = () =>
{
    const [tema, setTema] = useState(localStorage.getItem('TemaSelecionado') || 'Claro');

    useEffect(() => {
        document.body.className = tema;
        localStorage.setItem('TemaSelecionado', tema);

        window.dispatchEvent(new CustomEvent('temaAtualizado', { detail: tema }));
    }, [tema]);

    const TrocarTema = () =>
    {
        setTema(tema === "Claro" ? "Escuro" : "Claro");
    }

    const icone = tema === 'Claro' ? luaIcon : solIcon;

    return (
        <button onClick={TrocarTema} className={Style.tema}>
            
            <img src={icone} alt="Trocar tema" />
        </button>
    );
};

export { Tema };