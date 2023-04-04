import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css";

function NavBar({setShow}) {
    return(
            <nav className='header' >
                <span onClick={() => setShow(true)}>
                    Logo
                </span>
                <div className='Browserroutes'>
                    <span onClick={() => setShow(false)}>
                        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                    </span>
                </div>
            </nav>

    );
}

export default NavBar;