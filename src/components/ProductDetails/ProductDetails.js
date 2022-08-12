import styles from './ProductDetails.module.css';
import { useState, useContext, useEffect } from 'react';
import { UserActions } from '../grid-section/UserConstants';
import { UserDetails } from '../user-details/UserDetails';

import AuthContext from '../../context/AuthContext';
import * as userService from '../../services/authService';
import * as productService from '../../services/productService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    // Sold by: Users
    const { getAll, user } = useContext(AuthContext);
    const [traders, setTraders] = useState([]);
    const [userAction, setUserAction] = useState({ user: null, action: null });
    const [likes, setLikes] = useState('');
    const [isOwner, setIsOwner] = useState(false);
    const [hasLiked, setHasLiked] = useState(false);
    
    const userActionClickHandler = (userId, actionType) => {
        userService.getOne(userId)
            .then(user => {
                setUserAction({
                    trader: user,
                    action: actionType
                });
            })
    };


    const promise = Promise.resolve(getAll());

    useEffect(() => {
        promise.then(res => {
            while (res.length > 3) {
                res.pop();
            }
            setTraders(res);
        });
    }, []);

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    // Product Data
    const [actualItem, setActualItem] = useState({});
    const {productId} = useParams();

    
    useEffect(() => {
        Promise.resolve(productService.getOne(productId))
        .then(res => {
            setActualItem(res)
            setLikes(res.likes.length)
            if(res.owner === user._id){
                setIsOwner(true);
            }

            if(res.likes.find(x => x === user._id)){
                setHasLiked(true);
            }
        })
}, []);
    
    const onLike = (e) => {
        e.preventDefault();
        actualItem.likes.push(user._id);
        setActualItem(state => actualItem);
        setLikes(actualItem.likes.length);
        productService.udpateOne(actualItem._id, actualItem);
        setHasLiked(true);
    };

    const booly = !isOwner && !hasLiked;
    return (
        <div>

            {userAction.action === UserActions.Details &&
                <UserDetails
                    onClose={closeHandler}
                    trader={userAction.trader}
                />
            }

            <div className={styles.leftColumn}>
                <div className={styles.image}>
                    <img src={actualItem.image} />
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles['box-summary']}>
                    <h1>Product Title: {actualItem.name}.</h1>
                    <span className={styles['actual-price']}>Price: {actualItem.price}$</span>
                    <span className={styles['actual-category']}>Category: {actualItem.category}</span>
                    <span className={styles['box-description']}>Description: </span>
                    <div className={styles['wrap-desc']}>
                        <p className={styles['sold-title']}>Last sold by...</p>
                        <div className={styles['user-sold']}>
                        {traders
                        ? traders.map(x => (<img key={x._id} src={x.image} alt="img1" onMouseEnter={() => userActionClickHandler(x._id, UserActions.Details)} />))
                        : <span>No data.</span>
                        }
                        
                        </div>
                        <div className={styles['description-product']}>{actualItem.summary}</div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles['text-box']}>
                        <div disabled contentEditable='false' >
                        </div>
                        <p className={styles.productRate}>This product has been liked: {likes} times.</p>
                    </div>
                    <div>
                        
                        {booly
                        ? <button onClick={onLike} type='submit' className={styles['submit-btn']}>Like this product!</button>
                        : <span className={styles['no-likes']}> You have already liked!</span>
                        }
                        
                        
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