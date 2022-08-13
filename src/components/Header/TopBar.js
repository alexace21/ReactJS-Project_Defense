import { Link } from 'react-router-dom';
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../user-details/UserDetails';
import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../context/AuthContext';
import * as userService from '../../services/authService';

import styles from './TopBar.module.css';
const Top_Bar = () => {
    const { user, userEditHandler } = useContext(AuthContext);


    const [userAction, setUserAction] = useState({ trader: null, action: null });
    const userActionClickHandler = (user, actionType) => {
        setUserAction({
            trader: user,
            action: actionType
        });
    };

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    return (
        <>

            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                    editUserClick={userEditHandler}
                    trader={userAction.trader}
                />
            }

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
                                        <Link to="/create">Create offer</Link>
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
                        <div className={styles['search-box']}>
                            <img src="./images/search.png" alt="searchImage" />
                            <input type="text" placeholder='Search...' />
                        </div>
                        {/* Guest users */}
                        {user.email
                            ? <div className={styles.imgIcon}>
                                {user.image !== 'insert image path here'
                                    ? <img src={user.image} alt="profilePic" onMouseEnter={() => userActionClickHandler(user, UserActions.Details)} />
                                    : <img src="images/profile.png" alt="profilePic" onMouseEnter={() => userActionClickHandler(user, UserActions.Details)}/>
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