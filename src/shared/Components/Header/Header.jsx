import { GithubOutlined } from "@ant-design/icons"
import { useAuth } from "../../../core/hook/useAuth"

const Header = () => {

    const {login} = useAuth();
    return (
        <div className="flex justify-between items-center py-3 px-10 border border-b-2">
            <h2>Panel Administrador</h2>
            <p className="flex items-center">Bienvenido <span className="pl-1">{login} </span><GithubOutlined  className="text-xl px-2"/></p>
        </div>
    )
}

export default Header
