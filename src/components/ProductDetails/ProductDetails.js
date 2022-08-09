import styles from './ProductDetails.module.css';
import { useState } from 'react';
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../grid-section/user-details/UserDetails';

const ProductDetails = () => {
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
        <div>

            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                />
            }

            <div className={styles.leftColumn}>
                <div className={styles.image}>
                    <img src='./images/camera.jpg' />
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles['box-summary']}>
                    <h1>Product Title: Fujifilm Camera.</h1>
                    <span className={styles['actual-price']}>Price: 130.00$</span>
                    <span className={styles['box-description']}>Description: </span>
                    <div className={styles['wrap-desc']}>
                        <p className={styles['sold-title']}>Last sold by...</p>
                        <div className={styles['user-sold']}><img src='./images/profile.png' onMouseEnter={() => userActionClickHandler(UserActions.Details)} /><img src='./images/profile.png' onMouseEnter={() => userActionClickHandler(UserActions.Details)} /><img src='./images/profile.png' onMouseEnter={() => userActionClickHandler(UserActions.Details)} /></div>
                        <div className={styles['description-product']}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, sit minus? Similique incidunt dicta quia explicabo illum error hic nobis pariatur nulla voluptate voluptatibus nam quaerat itaque, praesentium tempora ipsam?</div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles['text-box']}>
                        <div disabled contentEditable='false' >
                        </div>
                        <p className={styles.productRate}>This product has been liked: 5 times.</p>
                    </div>
                    <div>
                        <button type='submit' className={styles['submit-btn']}>Like this product!</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};

export default ProductDetails;