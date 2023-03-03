import "../Menu/Menu.css";

import logo from "../../img/logo.svg";
import compras from "../../img/compras.svg";

const rotas = [
  { title: "Men", href: "./men" },
  { title: "Womem", href: "./women" },
  { title: "Kids", href: "./kids" },
  { title: "Sale", href: "./sale" },
];

const Menu = () => {
  return (
    <header>
      <nav className="menu">
        <img className="logo" src={logo} alt="Logo" />

        <ul>
          {rotas.map((rota) => (
            <li key={rota.title}>
              <a href={rota.href}>{rota.title}</a>
            </li>
          ))}
        </ul>

        <img className="img-compras" src={compras} alt="Compras" />
      </nav>
    </header>
  );
};

export default Menu;
