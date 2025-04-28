import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../../core/hook/useAuth";

const PrivateRouter = () => {
	const { login } = useAuth();
	return login ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
