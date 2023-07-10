import './Style.css'

import Button from '@mui/material/Button';

import logo from '../../assets/logo.png';

function Header() {

  return (
    <div className="navbar">
      <div className="navbar-content">
        <span className="mm-logo">
          <img src={logo} alt="matchmaker-logo" width="120px"/>
        </span>
        <span className="menu-items">
          <span className="first-menu">
            <a href="">Inicio</a>
            <a href="/jogos">Jogos</a>
            <a href="/criar-partida">Criar Partida</a>
          </span>
          <span className="second-menu">
            <Button variant='outlined' href="/cadastrar" > Cadastrar </Button>
            <Button variant='contained' href="/entrar" > Entrar </Button>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Header
