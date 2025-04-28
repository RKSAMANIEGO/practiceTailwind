import { GiftFilled, HomeFilled, LeftCircleFilled, LogoutOutlined, TagsFilled } from '@ant-design/icons'
import logo from '../../../assets/image/live_pictures_15405.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../core/hook/useAuth'
const Sidebar = () => {

    const [activeWidth,setActiveWidth]=useState(false);
    const navigate = useNavigate();
    const {logout} = useAuth();

    return (
        <div className='flex bg-pink-500 text-white font-bold flex-col items-center justify-between p-5 h-svh w-1/6 rounded-r-md relative transition-all duration-900 ease-in-out' style={{ width: activeWidth ? "5%" : "16.666%" }}>
            <img src={logo} alt="logo" className='w-1/3' style={{width:activeWidth?"100%": "33%"}} />  
            <ul className='flex flex-col gap-8'>
                <Link to="/panel/home"> <li className='px-10 py-3  hover:bg-pink-600 hover:text-white rounded-md cursor-pointer' style={{visibility: activeWidth?"hidden":"visible", textAlign:activeWidth && "center"}}> <HomeFilled className='hover:scale-125' style={{visibility:activeWidth && "visible"}} /> Home</li></Link>
                <Link to="/panel/about-me"><li className='px-10 py-3 text-center  hover:bg-pink-600 hover:text-white rounded-md cursor-pointer'style={{visibility: activeWidth?"hidden":"visible", textAlign:activeWidth && "center"}}><TagsFilled className='hover:scale-125' style={{visibility:activeWidth && "visible"}} /> About Me</li></Link>
                <Link to="/panel/service"><li className='px-10 py-3  hover:bg-pink-600 hover:text-white rounded-md cursor-pointer'style={{visibility: activeWidth?"hidden":"visible", textAlign:activeWidth && "center"}}><GiftFilled className='hover:scale-125' style={{visibility:activeWidth && "visible"}} /> Service</li></Link>
            </ul>
            <LogoutOutlined className='rotate-180 text-xl hover:text-pink-600 cursor-pointer' onClick={()=> {navigate("/login"); logout(); }}/>
            <LeftCircleFilled className='absolute -right-3 text-3xl text-black bg-white rounded-2xl hover:text-blue-600 cursor-pointer' style={{rotate:activeWidth &&"180deg"}} onClick={()=> setActiveWidth(!activeWidth)}/>
            
        </div>
    )
}

export default Sidebar
