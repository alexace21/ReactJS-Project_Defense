import { UserActions } from "./UserConstants";
import { UserItem } from "./grid-item/userItem";
import { UserDetails } from "../user-details/UserDetails";
import { UserEdit } from "./user-edit/UserEdit";
import { UserDelete } from "./user-delete/UserDelete";
import { OfferCreate } from "./offer-create/OfferCreate";
import { OfferDetails } from "./OfferDetails/OfferDetails";

import { useState } from "react";

import styles from './Market.module.css'

const Market = () => {

    const [users, setUsers] = useState([]); //users
    const [userAction, setUserAction] = useState({ user: null, action: null });

    //   useEffect(() => {
    //       userService.getAll()
    //         .then(users => setUsers(users))

    //   }, []);

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

    const userCreateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address
        }

        // userService.create(userData)
        //   .then(user => {
        //     setUsers(oldUsers => [...oldUsers, user])
        //     closeHandler();
        //   });

    }

    const editUserHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address
        }

        // let id = e.target.getAttribute('user');

        // userService.edit(userData, id)
        //   .then(user => {
        //     setUsers(oldUsers => [...oldUsers, user])
        //     closeHandler();
        //   });

    }

    //   const deleteHandler = (userId) => {
    //     userService.del(userId)
    //       .then(() => {
    //         closeHandler()
    //       })
    //   }

    return (
        <>
            <section className={styles.cardUserContainer}>
                <div className={styles['table-wrapper']}>

                    {userAction.action === UserActions.Details &&
                        <UserDetails
                            onClose={closeHandler}
                        />
                    }

                    {userAction.action === UserActions.OfferDts &&
                        <OfferDetails
                            onClose={closeHandler}
                        />
                    }

                    {userAction.action === UserActions.Edit &&
                        <UserEdit
                            user={userAction.user}
                            onClose={closeHandler}
                            onEdit={editUserHandler}
                        />
                    }

                    {userAction.action === UserActions.Delete &&
                        <UserDelete
                            user={userAction.user}
                            onClose={closeHandler}
                        // onDel={deleteHandler}
                        />
                    }

                    {userAction.action === UserActions.Add &&
                        <OfferCreate
                            onClose={closeHandler}
                            onUserCreate={userCreateHandler}
                        />
                    }

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Username<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="arrow-down" className={styles.icon} role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Category<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                        className={styles.icon} role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Product<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                        className={styles.icon} role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Price
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"

                                        className={styles.icon} role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Last Bid
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="arrow-down" className={styles.icon} role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                            <tr >
                                <UserItem
                                    // user={user}
                                    onActionClick={userActionClickHandler}
                                />
                            </tr>

                        </tbody>
                    </table>
                </div>

                <button className={styles.btnAdd} onClick={() => userActionClickHandler(UserActions.Add)}>Add new offer</button>
            </section>
        </>
    )
};

export default Market;