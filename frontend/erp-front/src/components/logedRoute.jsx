import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuth }) {
    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;