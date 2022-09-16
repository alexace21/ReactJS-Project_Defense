import { useEffect, useState } from 'react';
import * as marketService from '../../../services/marketService';
import * as productService from '../../../services/productService';
import styles from './OfferCreate.module.css';

export const OfferCreate = ({
    onClose,
    user,
    setOffers,
}) => {


    const onCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const productName = formData.get('productName');
        const category = formData.get('category');
        const price = formData.get('price');
        const imageUrl = formData.get('imageUrl');
        const duration = formData.get('duration');
        const owner = user._id;

        const recordToPost = {
            productName,
            category,
            price,
            imageUrl,
            duration,
            owner
        };

        marketService.create(recordToPost)
            .then(res => {
                console.log(res);
                setOffers(state => [...state, res])
                onClose();
            })

    }


    const [availableProducts, setAvailableProducts] = useState([]);

    useEffect(() => {
        user.collections.map(x => {
            productService.getAll(x)
                .then(res => {
                    setAvailableProducts(...availableProducts, res)
                })
        })
    }, [])
    

    console.log(availableProducts);

    return (
        < div className={styles.overlay} >
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles['user-container']}>
                    <header className={styles.headers}>
                        <h2>Add Offer</h2>
                        <button className={styles.btnClose} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="product">Product Name</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="product" name="productName" type="text" />
                                </div>
                                <p className={styles['form-error']}>
                                    Product name should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="category">Category</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="category" name="category" type="text" />
                                </div>
                                <p className={styles['form-error']}>
                                    Category name should be at least 3 characters long!
                                </p>
                            </div>
                        </div>

                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="price">Price</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="price" name="price" type="text" />
                                </div>
                                <p className={styles['form-error']}>Price is not valid!</p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="phoneNumber">Duration in days</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="duration" name="duration" type="text" />
                                </div>
                                <p className={styles['form-error']}>Duration hours field is not valid!</p>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className={styles['input-wrapper']}>

                                <input id="imageUrl" name="imageUrl" type="text" />
                            </div>
                            <p className={styles['form-error']}>ImageUrl is not valid!</p>
                        </div>
                        <div>
                            <label htmlFor="product">Available products</label>
                            <select id='product' name='product'>
                                {availableProducts.map(x => <option value={x._id}>{x.name}</option>)
                                }
                            </select>
                        </div>
                        <div className={styles['form-actions']}>
                            {user.collections.length > 0 &&
                            
                            <button id="action-save" className={styles.btnS} type="submit">Save</button>
                            }
                            {user.collections.length < 1 &&
                            <button id="action-save" className={styles.btnS} type="submit" disabled>Save</button>
                            }
                            <button id="action-cancel" className={styles.btnC} type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};