
import '../Menu/Menu.css';

import logo from '../../img/logo.svg';
import compras from '../../img/compras.svg';
 

const Menu = ()=>{

    return(

        <header >
            <nav className='menu'>
                <img className='logo' src={logo} alt='Logo'/> 

                <ul>
                    <li>Men</li>
                    <li>Womem</li>
                    <li>Kids</li>
                    <li>Sale</li>
                </ul>
                
                <img className='img-compras' src={compras} alt='Compras'/>
            </nav>
        </header>

    )

}


export default Menu;