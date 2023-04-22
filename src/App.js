import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './modules/navigation/Navigation'
import GeneratorModule from './modules/generator/GeneratorModule'
import TodoModule from './modules/todo/TodoModule'
import GradientsModule from './modules/gradients/GradientsModule'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Navigation />
                <Routes>
                    <Route path='/generator' element={<GeneratorModule />} />
                    <Route path='/todo' element={<TodoModule />} />
                    <Route path='/gradients' element={<GradientsModule />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}
