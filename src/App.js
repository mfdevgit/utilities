import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/About'
import Generator from './components/Generator'
import Gradients from './components/Gradients'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Navigation />
                <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/generator' element={<Generator />} />
                    <Route path='/gradients' element={<Gradients />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
