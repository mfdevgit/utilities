import { useSelector } from 'react-redux'
import { setIsSidebarOpen } from '../../../redux/slices/settings'
import styles from '../assets/styles/styles.module.scss'

export default function toggleSidebar(buttonRef, overlayRef, sidebarRef, dispatch, isSidebarOpen) {
    if (isSidebarOpen) {
        overlayRef.current.classList.remove(styles.open)
        sidebarRef.current.classList.remove(styles.open)
        buttonRef.current.classList.remove(styles.open)
        setTimeout(() => {
            dispatch(setIsSidebarOpen(false))
        }, 300)
    } else {
        dispatch(setIsSidebarOpen(true))
        overlayRef.current.classList.add(styles.open)
        sidebarRef.current.classList.add(styles.open)
        buttonRef.current.classList.add(styles.open)
    }
}
