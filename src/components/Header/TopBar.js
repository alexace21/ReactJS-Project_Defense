import { useNavigate, Link } from 'react-router-dom';
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../grid-section/user-details/UserDetails';
import { useState } from 'react';

import styles from './TopBar.module.css';
const Top_Bar = () => {
    const navigate = useNavigate();

    const [userAction, setUserAction] = useState({ user: null, action: null });
    const userActionClickHandler = (actionType) => {
        // userService.getOne(userId)
        //   .then(user => {
        setUserAction({
            //       user,
            action: actionType
        });
        console.log(actionType);
        //   })
    };

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    return (
        <>

            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                />
            }

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
                            <img src="images/profile.png" alt="profilePic" onMouseEnter={() => userActionClickHandler(UserActions.Details)} />
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
        </>
    );
};

export default Top_Bar;