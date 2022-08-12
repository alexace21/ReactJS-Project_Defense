import { useContext, useState } from 'react';
import styles from './UserDetails.module.css'
import AuthContext from '../../context/AuthContext';

export const UserDetails = ({ onClose, editUserClick, trader }) => {
    const { user } = useContext(AuthContext);

    const [isEdit, setIsEdit] = useState(false);
    const [isEdit2, setIsEdit2] = useState(false);
    const [isEdit3, setIsEdit3] = useState(false);
    const [isEdit4, setIsEdit4] = useState(false);
    const [isEdit5, setIsEdit5] = useState(false);

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
    const onTaskEdit5 = () => {
        setIsEdit5(true);
    };

    const onEditHandler = (e) => {
        e.preventDefault();
        const { fullname } = Object.fromEntries(new FormData(e.target));
        console.log(fullname);

        editUserClick(user, "fullname", fullname)
        setIsEdit(false);
    };
    const onEditHandler2 = (e) => {
        e.preventDefault();
        const { email } = Object.fromEntries(new FormData(e.target));


        editUserClick(user, "email", email)
        setIsEdit2(false);
    };
    const onEditHandler3 = (e) => {
        e.preventDefault();
        const { contacts } = Object.fromEntries(new FormData(e.target));

        editUserClick(user, "contacts", contacts)
        setIsEdit3(false);
    };
    const onEditHandler4 = (e) => {
        e.preventDefault();
        const { address } = Object.fromEntries(new FormData(e.target));

        editUserClick(user, "address", address)
        setIsEdit4(false);
    };
    const onEditHandler5 = (e) => {
        e.preventDefault();
        const { image } = Object.fromEntries(new FormData(e.target));

        editUserClick(user, "image", image)
        setIsEdit5(false);
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
                            {trader.image !== 'insert image path here'
                                ? <img src={trader.image} alt={`Alex's profile.`}
                                    className={styles.image} />
                                : <img src='./images/profile.png' alt={`Alex's profile.`}
                                    className={styles.image} />
                            }

                        </div>
                        <div className={styles['user-details']}>
                            <span>User Id: <strong>{trader._id}</strong></span>

                            <span>
                                Full Name:
                                {isEdit
                                    ? <form onSubmit={onEditHandler}>
                                        <input type="text" name="fullname" defaultValue={trader.fullname} />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>{trader.fullname} </strong>
                                        {user._id === trader._id &&
                                            <button onClick={onTaskEdit}>edit</button>
                                        }

                                    </>
                                }
                            </span>
                            <span>
                                Email:
                                {isEdit2
                                    ? <form onSubmit={onEditHandler2}>
                                        <input type="text" name="email" defaultValue={trader.email} />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>{trader.email} </strong>
                                        {user._id === trader._id &&
                                            <button onClick={onTaskEdit2}>edit</button>
                                        }

                                    </>
                                }
                            </span>
                            <span>
                                Phone Number:
                                {isEdit3
                                    ? <form onSubmit={onEditHandler3}>
                                        <input type="text" name="contacts" defaultValue={trader.contacts} />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>+{trader.contacts} </strong>
                                        {user._id === trader._id &&
                                            <button onClick={onTaskEdit3}>edit</button>
                                        }

                                    </>
                                }
                            </span>
                            <span>
                                Address:
                                {isEdit4
                                    ? <form onSubmit={onEditHandler4}>
                                        <input type="text" name="address" defaultValue={trader.address} />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>{trader.address} </strong>
                                        {user._id === trader._id &&
                                            <button onClick={onTaskEdit4}>edit</button>
                                        }

                                    </>
                                }
                            </span>
                            <span>
                                Avatar:
                                {isEdit5
                                    ? <form onSubmit={onEditHandler5}>
                                        <input type="text" name="image" defaultValue={trader.image} />
                                        <input type="submit" value="edit" />
                                    </form>
                                    : <>

                                        <strong>{trader.image} </strong>
                                        {user._id === trader._id &&
                                            <button onClick={onTaskEdit5}>edit</button>
                                        }

                                    </>
                                }
                            </span>

                            <p>Created on: <strong>{trader.updated}</strong></p>
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