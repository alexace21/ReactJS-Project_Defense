import { useNavigate, Link } from 'react-router-dom';

import styles from './TopBar.module.css';
const Top_Bar = ({ onActionClick }) => {
    const navigate = useNavigate();

    return (

        <header>
            <nav>
                <div>
                    <div className={styles.marketLogo}>
                        <Link to='/'><img src="images/market-logo.jpg" alt="logo.png" /></Link>
                    </div>

                    <ul>
                        <li>
                            <img src="images/market.png" alt="market.png" />
                            <Link to="/market">Market</Link>
                        </li>
                        <li>
                            {/* Logged-in users */}
                            <div id="user">
                                <Link to="/create">Create offer</Link>
                                <Link to="/logout">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.cryptoImg}>
                    <img src="./images/crypto.png" />
                    <span>We officially accept Crypto.</span>
                </div>

                <div className={styles.navRight}>
                    <div className={styles['search-box']}>
                        <img src="./images/search.png" alt="searchImage" />
                        <input type="text" placeholder='Search...' />
                    </div>

                    <div className={styles.imgIcon}>
                        <img src="images/profile.png" alt="profilePic" onMouseEnter={() => onActionClick(UserActions.Details)} />
                    </div>

                    <ul>
                        <li>
                            {/* Guest users */}
                            <div className={styles.guest}>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Top_Bar;