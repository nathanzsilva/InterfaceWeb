import React, { useEffect, useState } from "react";
import './ranking.css'
import { NavBar } from "../../componentes/navbar";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Ranking = () => {
    const [pontuacoes, setPontuacoes] = useState([]);

    useEffect(() => {
        // Suponha que você tenha armazenado a lista de pontuações no localStorage com a chave "pontuacoes"
        const pontuacoesLocalStorage = JSON.parse(localStorage.getItem("ranking")) || [];
        setPontuacoes(pontuacoesLocalStorage);
    }, []);

   
    return (
        <>
            <NavBar />
            <Link to={"/"}>
                <BsFillArrowLeftCircleFill size={50} color="black" className="voltar" />
            </Link>
            <div className="ranking-container">

                <h1 className="ranking-title">Tabela de Classificação</h1>
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th className="user-header">Usuário</th>
                            <th className="score-header">Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pontuacoes.sort((a, b) => b.points - a.points).map((pontuacao, index) => (
                            <tr key={index}>
                                <td className="user-name">{pontuacao.name}</td>
                                <td className="user-score">{pontuacao.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Ranking;
