import { Navigate } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export const PrivateGuard = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to="/404" replace />;
    }

    return children;
};

