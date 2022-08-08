import classNames from 'classnames';
import styles from './TopBar.module.css';

const Top_Bar = () => {
    return (
        <header>
            <nav>
                <div>
                    <div className={styles.marketLogo}>
                        <a href='/'><img src="images/market-logo.jpg" alt="logo.png" /></a>
                    </div>

                    <ul>
                        <li>
                            <img src="images/market.png" alt="market.png" />
                            <a href="/market">Market</a>
                        </li>
                        <li>
                            {/* Logged-in users */}
                            <div id="user">
                                <a href="/create">Create offer</a>
                                <a href="/logout">Logout</a>
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
                        <img src="images/profile.png" alt="profilePic" />
                    </div>

                    <ul>
                        <li>
                            {/* Guest users */}
                            <div id="guest">
                                <a href="/login">Login</a>
                                <a href="/register">Register</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Top_Bar;