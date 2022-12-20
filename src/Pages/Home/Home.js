import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import TackStack from '../TechStack/TackStack';
import './Home.css'

const Home = () => {
    return (
        <div className=' f-family w-full md:w-11/12 lg:w-10/12 mx-auto'>
           <Header></Header>
           <Banner></Banner>
           <AboutMe></AboutMe>
           <TackStack></TackStack>
           <Projects></Projects>
           <Contact></Contact>
           <div className="divider"></div> 

           <Footer></Footer>
        </div>
    );
};

export default Home;