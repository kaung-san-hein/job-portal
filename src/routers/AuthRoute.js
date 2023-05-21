import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// to protect private page
const AuthRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default AuthRoute