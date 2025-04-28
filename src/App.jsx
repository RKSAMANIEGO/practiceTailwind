import { BrowserRouter as Router ,Routes, Route  } from "react-router-dom"
import Login from "./features/Login/Login"
import Dashboard from './shared/Components/Dashboard/Dashboard'
import AuthProvider from './core/context/AuthProvider'
import PrivateRouter from './shared/utils/PrivateRouter'
import LandingPage from "./shared/LandingPage/Pages/LandingPage"
import Products from "./shared/LandingPage/Components/Products/Pages/Products"
import TopPage from "./shared/TopPage/TopPage"
function App() {



  return (  
  <AuthProvider>

    <Router>
      <TopPage/>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/products" element={<Products/>}/>


          <Route element={<PrivateRouter/>}>

            <Route path="/panel" element={<Dashboard/>}>
              <Route index element={<h1 className="px-10 py-5 text-xl">Home</h1>}/>
              <Route path="home" element={<h1 className="px-10 py-5 text-xl">Home</h1>}/>
              <Route path="about-me" element={<h1 className="px-10 py-5 text-xl">About Me</h1>}/>
              <Route path="service" element={<h1 className="px-10 py-5 text-xl">Service</h1>}/>
            </Route>

          </Route>
      </Routes>
    </Router>

  </AuthProvider>
  )
}

export default App
