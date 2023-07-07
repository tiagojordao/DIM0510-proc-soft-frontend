import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/index.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route Component={Header} path="/" exact />
        <Route Component={SignIn} path="/entrar" />
        <Route Component={SignUp} path="/cadastrar" />
      </Routes>
    </>
  )
}

export default App
