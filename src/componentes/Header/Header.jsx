import './Header.css';

function Header(props) {
    return(
        <header className="header">
            <h1>{props.nomeUser}</h1>

            <img src={props.img} alt="imageProfile" />
        </header>
    );
}
export default Header;