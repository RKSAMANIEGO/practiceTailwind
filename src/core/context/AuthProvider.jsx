import {  useState } from "react";
import PropTypes from "prop-types";
import {AuthContext} from '../hook/AuthContext'

const AuthProvider = ({ children }) => {
	const [login, setLogin] = useState('');

	const authentication = (userData) => setLogin(userData);	

	const logout = () => {localStorage.clear();setLogin(null);};

	return (
		<AuthContext.Provider value={{ login, authentication, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
export default AuthProvider;
