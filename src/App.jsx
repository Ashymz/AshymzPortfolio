import React from 'react'
import About from './components/about/About'
import InteractiveBackground from './components/background/InteractiveBackground'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
// import VideoPlayer from './components/VideoPlayer/video'; 
import Testimonials from './components/testimonials/Testimonials'
/** 
 * Thêm vào dòng 24 để hiện Testimonials
 * <Testimonials />
*/
const App = () => {
    return (
        <div className="app-layout">
            <InteractiveBackground />
            <main className="app-content">
                <Header />
                <Nav />
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default App