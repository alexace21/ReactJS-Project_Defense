import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { updateUser, getAll } from '../services/authService';
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLoginHandler = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const allUsers = getAll();
        
    const userEditHandler = async (user, newInfo) => {
        const updatedUser = { ...user, newInfo: newInfo };

        console.log(updatedUser);
        // await updateUser(user._id, updatedUser);

        // setTasks(state => state.map(x => x._id == user._id ? updatedUser : x));
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLoginHandler,
            userLogout,
            userEditHandler,
            allUsers,
            isAuthenticated: !!auth.accessToken // Boolean
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


