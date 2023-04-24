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
    return (
        <svg
            className={isSidebarOpen ? `${styles.sidebar_btn} ${styles.open}` : `${styles.sidebar_btn} ${styles.closed}`}
            onClick={handleClick}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
        >
            <rect x='15' y='10' width='20' height='6' rx='3' ry='3' />
            <rect x='10' y='22' width='30' height='6' rx='3' ry='3' />
            <rect x='15' y='34' width='20' height='6' rx='3' ry='3' />
        </svg>
    )
}
