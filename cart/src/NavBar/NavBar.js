import { Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return(
        <div>
            <header className='header' >
                <label style={{fontSize: '30px'}}>Logo</label>
                <div className='Browserroutes'>

                    <span><FontAwesomeIcon icon={faCartShopping} size="2xl" /></span><span/>
                </div>
            </header>

        </div>
    )
}

export default NavBar;