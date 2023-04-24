import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSidebarOpen } from '../../redux/slices/settings'
import styles from './assets/styles/styles.module.scss'

export default function SidebarModule() {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.settings.isSidebarOpen)

    const handleCloseSidebar = () => {
        dispatch(setIsSidebarOpen(false))
    }

    return (
        <>
            <div className={isSidebarOpen ? styles.overlay : `${styles.overlay} ${styles.closed}`} onClick={handleCloseSidebar} />
            <div className={isSidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.closed}`}>
                <nav className={styles.navigation}>
                    <Link to='/generator' onClick={handleCloseSidebar}>
                        Генератор
                    </Link>
                    <Link to='/todo' onClick={handleCloseSidebar}>
                        Список
                    </Link>
                    <Link to='/gradients' onClick={handleCloseSidebar}>
                        Градиенты
                    </Link>
                </nav>
            </div>
        </>
    )
}
