import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard = () => {
    return (
        <section className="flex w-full">
            <Sidebar className="flex-1"/>
            <section className="w-full">
                <Header/>
                <div>
                    <Outlet/>
                </div>
            </section>
        </section>
  )
}

export default Dashboard
