import React from 'react'
import styles from './assets/styles/styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSidebarOpen } from '../../../../redux/slices/settings'

export default function SidebarButton() {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.settings.isSidebarOpen)
    const handleClick = () => {
        dispatch(setIsSidebarOpen(!isSidebarOpen))
    }
    return <button className={isSidebarOpen ? styles.sidebar_btn : `${styles.sidebar_btn} ${styles.closed}`} onClick={handleClick} />
}
