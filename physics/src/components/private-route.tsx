import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
	const localStorageToken = localStorage.getItem("token");

	return localStorageToken ? <Outlet /> : <Navigate to="/sign-in"  replace />;
};

export default PrivateRoutes;