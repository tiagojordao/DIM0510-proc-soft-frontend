import './Style.css'

import CircularProgress from '@mui/material/CircularProgress';

import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';

import Header from '../../components/header/';
import CardGame from '../../components/cardGame/';
import Footer from '../../components/footer/';

export default function Games() {

    const [games, setGames] = useState([]);
    const [isBusy, setBusy] = useState(true);

    /**
     * ComonentDidMount
     */
    useEffect(() => {

        async function loadData() {
            const result = await api.get('/matches', {
                headers: {
                    token: true
                }
            }).catch((err) => {
                console.log(err);
            });
            setGames(result.data.games);
            console.log(result.data.games);
        }

        loadData();
        setBusy(false);
    }, []);

    return (
        <>
            <Header/>
            <div className="header">
                <div className="content header-vertical-align">
                    <h2 className="games-title">Jogos</h2>
                </div>
            </div>
            <div className="content negative-margin-content">
                { games && games.map((game, index) => (
                    <CardGame
                        key={index} 
                        sportName={game.modalidade}
                        capacity={game.qtdParticipantes}
                        gameStartTime={game.horarioInicio}
                        gameDate={game.data}
                        registered="0"
                    />
                )) }
            </div>
            <Footer/>
        </>
    )
}
