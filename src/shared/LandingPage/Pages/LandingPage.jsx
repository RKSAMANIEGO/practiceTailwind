import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Maps from "../Components/Maps/Maps";
import NavBar from "../Components/NavBar/NavBar"
import ServiceHome from "../Components/ServiceHome/ServiceHome";

const LandingPage = () => {
    return (
        <>  
            <div id="home" className="h-16"></div>
            <NavBar/>
            <Hero/>
            <ServiceHome/>
            <Contact/>
            <Maps/>
            <Footer/>
        </>
    );
};

export default LandingPage;