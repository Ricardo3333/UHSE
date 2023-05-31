
import { Link } from "react-router-dom";
import "../../assets/index.css";

function Header() {
    return (

        <ul className="menu">

            <li className="bolinha" ><Link to="/" className="itens-menu aumentar"> Página Inicial </Link> </li> 
            <li className="bolinha"><Link to="/Produtos" className="itens-menu aumentar">  UHSE </Link></li>
            <li className="bolinha"><Link to="/Contatos" className="itens-menu aumentar"> Contatos </Link></li>
            
            
            
        </ul>
    )
}

export default Header;