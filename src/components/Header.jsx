import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPercent} from "@fortawesome/free-solid-svg-icons";


function Header() {
    return (
        <>
            <nav>
                <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" width="100px" height="100px" />
                <ul>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</li>
                    <li><FontAwesomeIcon icon={faPercent} />Offer</li>
                    <li>Offer</li>
                    <li>Offer</li>
                </ul>
            </nav>
        </>
    );
}

export default Header;

