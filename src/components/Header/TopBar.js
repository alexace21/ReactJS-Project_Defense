import { Link } from 'react-router-dom';
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../user-details/UserDetails';
import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../context/AuthContext';

import styles from './TopBar.module.css';
const Top_Bar = () => {
    const { user, userEditHandler, allUsers } = useContext(AuthContext);

    const [loggedUser, setLoggedUser] = useState({});
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
        

        // const promise =  Promise.resolve(allUsers);

        // useEffect(() => {
        //     promise.then(res => {
        //         const currentUser = res.find(x => x._id === user._id);
        //         setLoggedUser(currentUser);
        //     });
        // }, [])
        
         
        //  console.log(loggedUser);
      

    
    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    return (
        <>

            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                    editUserClick={userEditHandler}
                    user={user}
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
                                <img src="images/profile.png" alt="profilePic" onMouseEnter={() => userActionClickHandler(UserActions.Details)} />
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