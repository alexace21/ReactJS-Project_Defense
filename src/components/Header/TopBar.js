import { Link } from 'react-router-dom';
import { UserActions } from '../grid-section/UserConstants';
import { useContext, useState } from 'react';

import AuthContext from '../../context/AuthContext';
import ProductSearch from '../Catalog/search/ProductSearch';

import styles from './TopBar.module.css';
const Top_Bar = () => {
    const { user, userActionClickHandler } = useContext(AuthContext);
    const [checkedSearch, setCheckedSearch] = useState(false);


    setInterval(() => {
        if (window.location.href === 'http://localhost:3000/catalog') {
            setCheckedSearch(true);
        } else {
            setCheckedSearch(false);
        }
    }, 1000);


    return (
        <>
            <header>
                <nav>
                    <div>
                        <div className={styles.marketLogo}>
                            <Link to='/'>
                                <img src="images/market-logo.jpg" alt="logo.png" />
                            </Link>
                        </div>

                        <ul>
                            <li>
                                <img src="images/market.png" alt="market.png" />
                                <Link to="/market">Market</Link>
                            </li>
                            <li>
                                {/* Logged-in users */}
                                {user.email
                                    ? <div id="user">
                                        <Link to="/catalog">Catalog</Link>
                                        <Link to="/logout">Logout</Link>
                                    </div>
                                    : ""
                                }
                            </li>
                        </ul>
                    </div>

                    <div className={styles.cryptoImg}>
                        <img src="./images/crypto.png" />
                        <span>We officially accept Crypto.</span>
                    </div>

                    <div className={styles.navRight}>
                        {checkedSearch && <ProductSearch />}

                        {/* Guest users */}
                        {user.email
                            ? <div className={styles.imgIcon}>
                                {user.image !== 'insert image path here'
                                    ? <img src={user.image} alt="profilePic" onMouseEnter={() => userActionClickHandler(user, UserActions.Details)} />
                                    : <img src="images/profile.png" alt="profilePic" onMouseEnter={() => userActionClickHandler(user, UserActions.Details)} />
                                }

                                <span className={styles['user-email']}>{user.email}</span>
                            </div>

                            : <div className={styles.guest}>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Top_Bar;