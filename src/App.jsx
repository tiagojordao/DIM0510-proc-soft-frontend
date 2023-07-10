import './App.css'
import { Routes, Route } from 'react-router-dom';

import api from './services/api.js';

import Header from './components/header/index.jsx';
import Games from './pages/Games/Games.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import CreateGame from './pages/CreateGame/CreateGame';

function App() {
  return (
    <>
      <Routes>
        <Route Component={Header} path="/" exact />
        <Route Component={Games} path="/jogos" />
        <Route Component={CreateGame} path="/criar-partida"/>
        <Route Component={SignIn} path="/entrar" />
        <Route Component={SignUp} path="/cadastrar" />
      </Routes>
    </>
  )
}

export default App
