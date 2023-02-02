import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        //O Fragment (<> </>) serve para permitir que o componente react exporte mais de uma tag
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/7.3.5.6/"> @7.3.5.6</a>
                </p>
            </div>
        </header>
    )
}

export default Header;