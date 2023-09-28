import logo from '../../logo.svg';
import './navbar.css'

export const NavBar = () => {
    return (
        <header>        
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <h1>Desafio do Conhecimento</h1>
        </header>
    )
}