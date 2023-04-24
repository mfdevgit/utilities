import { Routes, Route } from 'react-router-dom'
import { Header } from './modules/header/index'
import GeneratorModule from './modules/generator/GeneratorModule'
import TodoModule from './modules/todo/TodoModule'
import GradientsModule from './modules/gradients/GradientsModule'
import Footer from './components/Footer'
import useCheckDeviceType from './hooks/checkDeviceType'
import { Sidebar } from './modules/sidebar/index'

export default function App() {
    const deviceType = useCheckDeviceType()

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
