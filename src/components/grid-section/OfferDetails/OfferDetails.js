import { useEffect, useState } from 'react';
import styles from './OfferDetails.module.css'
import * as marketService from '../../../services/marketService';

export const OfferDetails = ({ user, onClose, offer, updateOffersClick }) => {

    const [values, setValues] = useState({
        price: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const onBid = (e) => {
        e.preventDefault();
        console.log(values.price);
        marketService.getOne(offer._id)
            .then(res => {

                res.bidders.push(user._id)
                res.price = values.price;
                marketService.udpateOne(res._id, res)
                    .then(res => {
                        updateOffersClick(res);
                        onClose()
                    })
            })
    }

    const isOwner = offer.owner === user._id;

    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles['detail-container']}>
                    <header className={styles.headers}>
                        <h2>Offer Details</h2>
                        <button className={styles.btnClose} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <div className={styles.content}>
                        <div className={styles['image-container']}>
                            <img src={offer.imageUrl} alt={`Alex's profile.`}
                                className={styles.image} />
                        </div>
                        <div className={styles['user-details']}>
                            <p>Seller: <strong>{offer.owner}</strong></p>
                            <p>
                                Product Name:
                                <strong> {offer.productName} </strong>
                            </p>
                            <p>
                                Category:
                                <strong>{offer.category}</strong>
                            </p>

                            <p>Created on: <strong>{offer.updated}</strong></p>

                            {!isOwner
                                ?   (<button htmlFor="price" className={styles['label-bid']} onClick={onBid}>Bid now</button>)
                                : ""
                            }
                            <p>Current Price: <strong><input type="number" name='price' defaultValue={offer.price} className={styles['input-price']} onChange={changeHandler} />$</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function printAddress(data) {
    return `${data.country}, ${data.city}, ${data.street} ${data.streetNumber}`;
};