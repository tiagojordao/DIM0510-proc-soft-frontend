import './Style.css'


import Header from '../../components/header/';
import CardGame from '../../components/cardGame/';

export default function Games() {
    return (
        <>
            <Header/>
            <div className="header">
                <div className="content header-vertical-align">
                    <h2 className="games-title">Jogos</h2>
                </div>
            </div>
            <div className="content negative-margin-content">
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
                <CardGame sportName="Futebol" capacity="22" registered="18"/>
            </div>
        </>
    )
}
