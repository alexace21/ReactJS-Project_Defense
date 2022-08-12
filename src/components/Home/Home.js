import styles from './Home.module.css'
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../user-details/UserDetails';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';
import * as userService from '../../services/authService';
import * as productService from '../../services/productService';

const Home = () => {
    const { getAll, user, userActionClickHandler, userAction, setUserAction } = useContext(AuthContext);
    const [traders, setTraders] = useState([]);


    const promise = Promise.resolve(getAll());

    useEffect(() => {
        promise.then(res => {
            while (res.length > 4) {

                res.pop();

            }
            setTraders(res);
        });
    }, []);

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    // Your products
    const [availableProducts, setAvailableProducts] = useState([]);



    useEffect(() => {
        userService.getOne(user._id)
            .then(res => {
                console.log(res);
                (res.collections).forEach(element => {
                    productService.getOne(element)
                        .then(res => setAvailableProducts(state => [...state, res]))
                });
            });
    }, [])

    console.log(availableProducts);
    return (

        <>
            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                    trader={userAction.trader}
                />
            }

            <div className={styles.container}>
                {/* //---------Left-sidebar---------\\ */}
                <div className={styles['left-sidebar']}>
                    <span className={styles.sideTitle}>Top Traders</span>
                    <div>
                        <ul className={styles['imp-links']}>
                            {traders
                                ? traders.map(x => (<li key={x._id}><a href=""><img src={x.image} alt="img1" onMouseEnter={() => userActionClickHandler(x, UserActions.Details)} /> - {x.fullname}</a>Profit: {x.profit}</li>))
                                : <span>No users registered!</span>
                            }

                            {/* <li><a href=""><img src="./images/image4.png" alt="img1" onMouseEnter={() => userActionClickHandler(UserActions.Details)} /> - Bounty_Hunter</a>Profit: 2314</li>
                            <li><a href=""><img src="./images/image2.png" alt="img2" onMouseEnter={() => userActionClickHandler(UserActions.Details)} /> - Gold Member</a>Profit: 2314</li>
                            <li><a href=""><img src="./images/image3.png" alt="img3" onMouseEnter={() => userActionClickHandler(UserActions.Details)} /> - Bigozzaa</a>Profit: 2314</li>
                            <li><a href=""><img src="./images/image1.jpg" alt="img4" onMouseEnter={() => userActionClickHandler(UserActions.Details)} /> - Certified</a>Profit: 2314</li> */}
                        </ul>
                    </div>
                </div>

                {/* //---------Main-sidebar---------\\ */}
                <div className={styles['main-content']}>

                    {availableProducts
                        ? availableProducts.map(x =>
                        (
                            <div className={styles.game} key={x._id}>
                                <div className={styles['image-wrap']}>
                                    <img src={x.image} />
                                    <h3 className={styles['product-title']}>{x.name}</h3>
                                    <div className={styles['data-buttons']}>
                                        <Link className={styles['btn']} to={`/product-details/${x._id}`}>Details</Link>
                                    </div>
                                </div>
                            </div>)
                        )

                        : <span> No products yet...</span>
                    }

                </div>

                {/* //---------Right-sidebar---------\\ */}
                <div className={styles['right-sidebar']}>
                    <div className={styles['sidebar-title']}>
                        <h4>Gadgets</h4>
                    </div>
                    <img src="./images/trader2.png" />
                </div>
            </div>

        </>

    );

};

export default Home;