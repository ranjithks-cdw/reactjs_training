import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = props => {
    const {isAllowed, redirectPath, children} = props;

    return (
        <>
            {isAllowed && (children ? children : <Outlet />) }
            {!isAllowed && <Navigate to={redirectPath} />}
        </>
    );
};

export default ProtectedRoutes;