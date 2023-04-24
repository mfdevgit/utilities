import { Routes, Route } from 'react-router-dom'
import { Header } from './modules/header/index'
import { Sidebar } from './modules/sidebar/index'
import { GeneratorModule } from './modules/generator/index'
import { TodoModule } from './modules/todo/index'
import { GradientsModule } from './modules/gradients/index'
import { Footer } from './modules/footer/index'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Sidebar />
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
