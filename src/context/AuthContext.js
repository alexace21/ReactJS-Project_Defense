import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { updateUser, getAll } from '../services/authService';
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLoginHandler = (authData) => {
        const {email, fullname, _id, profit, image, contacts, address, updated, collections, ...userData} = authData;
        setAuth({email, fullname, _id, profit, image, contacts, address, updated, collections});
    };

    const userLogout = () => {
        setAuth({});
    };
    
    const [userAction, setUserAction] = useState({ trader: null, action: null });

    const userActionClickHandler = (user, actionType) => {
        setUserAction({
            trader: user,
            action: actionType
        });
    };

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLoginHandler,
            userLogout,
            getAll,
            userAction,
            setUserAction,
            userActionClickHandler,
            closeHandler,
            isAuthenticated: !!auth._id // Boolean
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom Hook (unUsed in this app)
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};

// Alternative of above with HOC
export const withAuth = (Component) => {
    const AuthWrapper = (props) => {
        const context = useContext(AuthContext);

        return <Component {...props} auth={context} />
    }

    return AuthWrapper;
};



