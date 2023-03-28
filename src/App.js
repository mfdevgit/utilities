import Generator from './components/Generator'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <main>
                <Generator />
            </main>
            <Footer />
        </div>
    )
}
