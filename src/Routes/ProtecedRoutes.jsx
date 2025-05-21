import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
    const { user, accessToken } = useSelector((state) => state.auth);
    const token = accessToken || localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem("token");
            return <Navigate to="/login" />;
        }
    } catch (error) {
        localStorage.removeItem("token");
        return <Navigate to="/login" />;
    }

    // ✅ Retrun the <Outlet />
    return <Outlet />;
};

export default ProtectedRoute;

