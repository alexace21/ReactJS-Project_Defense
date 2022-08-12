import { useContext, useState } from 'react';
import styles from './UserDetails.module.css'
import { AuthProvider } from '../../context/AuthContext';

export const UserDetails = ({ onClose, user, userEditHandler }) => {

    // const {userEditHandler, user} = useContext(AuthProvider);

    const [isEdit, setIsEdit] = useState(false);
    const [isEdit2, setIsEdit2] = useState(false);
    const [isEdit3, setIsEdit3] = useState(false);
    const [isEdit4, setIsEdit4] = useState(false);

    const onTaskEdit = () => {
        setIsEdit(true);
    };
    const onTaskEdit2 = () => {
        setIsEdit2(true);
    };
    const onTaskEdit3 = () => {
        setIsEdit3(true);
    };
    const onTaskEdit4 = () => {
        setIsEdit4(true);
    };

    const onEditHandler = (e) => {
        e.preventDefault();
        const { fullname } = Object.fromEntries(new FormData(e.target));
        console.log(fullname);

        // taskEditHandler(user, title)
        setIsEdit(false);
    };
    const onEditHandler2 = (e) => {
        e.preventDefault();
        const { email } = Object.fromEntries(new FormData(e.target));
        console.log(user);
        console.log(email);

        // taskEditHandler(user, title)
        setIsEdit2(false);
    };
    const onEditHandler3 = (e) => {
        e.preventDefault();
        const { contacts } = Object.fromEntries(new FormData(e.target));
        console.log(contacts);

        // taskEditHandler(user, title)
        setIsEdit3(false);
    };
    const onEditHandler4 = (e) => {
        e.preventDefault();
        const { address } = Object.fromEntries(new FormData(e.target));
        console.log(address);

        // taskEditHandler(user, title)
        setIsEdit4(false);
    };

    
    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles['detail-container']}>
                    <header className={styles.headers}>
                        <h2>Trader Details</h2>
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
                            <img src='./images/profile.png' alt={`Alex's profile.`}
                                className={styles.image} />
                        </div>
                        <div className={styles['user-details']}>
                            <span>User Id: <strong>{user._id}</strong></span>

                            <span>
                                Full Name:
                                {isEdit
                                    ? <form onSubmit={onEditHandler}>
                                        <input type="text" name="fullname" defaultValue="Alex Asenov" />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>Alex Asenov </strong>
                                        <button onClick={onTaskEdit}>edit</button>

                                    </>
                                }
                            </span>
                            <span>
                                Email:
                                {isEdit2
                                    ? <form onSubmit={onEditHandler2}>
                                        <input type="text" name="email" defaultValue="aleks@abv.bg" />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>aleks@abv.bg </strong>
                                        <button onClick={onTaskEdit2}>edit</button>

                                    </>
                                }
                            </span>
                            <span>
                                Phone Number:
                                {isEdit3
                                    ? <form onSubmit={onEditHandler3}>
                                        <input type="text" name="contacts" defaultValue="3598948732" />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>+3598948732 </strong>
                                        <button onClick={onTaskEdit3}>edit</button>

                                    </>
                                }
                            </span>
                            <span>
                                Address:
                                {isEdit4
                                    ? <form onSubmit={onEditHandler4}>
                                        <input type="text" name="address" defaultValue="Boulevard dolniBogro" />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>Boulevard dolniBogro </strong>
                                        <button onClick={onTaskEdit4}>edit</button>

                                    </>
                                }
                            </span>

                            <p>Created on: <strong>today</strong></p>
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