import styles from './UserEdit.module.css';
import * as marketService from '../../../services/marketService';

export const UserEdit = ({
    onClose,
    updateOffersClick,
    offer
}) => {

    const editUserHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const productName = formData.get('productName');
        const category = formData.get('category');
        const price = formData.get('price');
        const imageUrl = formData.get('imageUrl');

        marketService.udpateOne(offer._id, {
            productName,
            category,
            price,
            imageUrl
        }).then(
            res => {
                console.log(res);
                updateOffersClick(res);
                onClose();
            }
        )
        // let id = e.target.getAttribute('user');

        // userService.edit(userData, id)
        //   .then(user => {
        //     setUsers(oldUsers => [...oldUsers, user])
        //     closeHandler();
        //   });

    };

    return (
        < div className={styles.overlay} >
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles['user-container']}>
                    <header className={styles.headers}>

                        <h2>Edit Offer</h2>

                        <button className={styles['btn-close']} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={editUserHandler}>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="product">Product Name</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="product" name="productName" type="text" defaultValue={offer.productName} />
                                </div>
                                <p className={styles['form-error']}>
                                    Product name should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="category">Category</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="category" name="category" type="text" defaultValue={offer.category} />
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

                                    <input id="price" name="price" type="text" defaultValue={offer.price} />
                                </div>
                                <p className={styles['form-error']}>Price is not valid!</p>
                            </div>
                            
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className={styles['input-wrapper']}>

                                <input id="image" name="imageUrl" type="text" defaultValue={offer.imageUrl} />
                            </div>
                            <p className={styles['form-error']}>ImageUrl is not valid!</p>
                        </div>

                        <div className={styles['form-actions']}>
                            <button id="action-save" className={styles['btn-save']} type="submit">Save</button>
                            <button id="action-cancel" className={styles['btn-cancel']} type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}