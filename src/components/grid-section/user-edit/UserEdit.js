import styles from './UserEdit.module.css';

export const UserEdit = ({
    onClose,
    onEdit
}) => {
    return (
        < div className={styles.overlay} >
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles['user-container']}>
                    <header className={styles.headers}>
                        <h2>Edit User</h2>
                        <button className={styles['btn-close']} onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onEdit}>
                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="product">Product</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="product" name="product" type="text" defaultValue="Knife" />
                                </div>
                                <p className={styles['form-error']}>
                                    Product name should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="category">Category</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="category" name="category" type="text" defaultValue="cuttlery" />
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

                                    <input id="price" name="price" type="text" defaultValue="99.99$" />
                                </div>
                                <p className={styles['form-error']}>Price is not valid!</p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="phoneNumber" name="phoneNumber" type="text" defaultValue="+358949123" />
                                </div>
                                <p className={styles['form-error']}>Phone number is not valid!</p>
                            </div>
                        </div>

                        <div className="form-group long-line">
                            <label htmlFor="imageUrl">Image Url</label>
                            <div className={styles['input-wrapper']}>

                                <input id="imageUrl" name="imageUrl" type="text" defaultValue="imageBlahblah" />
                            </div>
                            <p className={styles['form-error']}>ImageUrl is not valid!</p>
                        </div>

                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="country">Country</label>
                                <div className={styles['input-wrapper']}>
                                    <input id="country" name="country" type="text" defaultValue="Bulgaria" />
                                </div>
                                <p className={styles['form-error']}>
                                    Country should be at least 2 characters long!
                                </p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="city">City</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="city" name="city" type="text" defaultValue="Sofia" />
                                </div>
                                <p className={styles['form-error']}>
                                    City should be at least 3 characters long!
                                </p>
                            </div>
                        </div>

                        <div className={styles['form-row']}>
                            <div className={styles['form-group']}>
                                <label htmlFor="street">Street</label>
                                <div className={styles['input-wrapper']}>
                                    <input id="street" name="street" type="text" defaultValue="Banga" />
                                </div>
                                <p className={styles['form-error']}>
                                    Street should be at least 3 characters long!
                                </p>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="streetNumber">Street number</label>
                                <div className={styles['input-wrapper']}>

                                    <input id="streetNumber" name="streetNumber" type="text" defaultValue="32" />
                                </div>
                                <p className={styles['form-error']}>
                                    Street number should be a positive number!
                                </p>
                            </div>
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