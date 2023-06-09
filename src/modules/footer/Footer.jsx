import React from 'react'
import styles from './assets/styles/styles.module.scss'
import { useSelector } from 'react-redux'

export default function Footer() {
    const isSidebarOpen = useSelector(state => state.settings.isSidebarOpen)
    return (
        <footer className={styles.footer}>
            <a href='https://github.com/mfdevgit/utilities' target='_blank' rel='noopener noreferrer'>
                <svg className={isSidebarOpen && styles.open} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                    <path d='m28.05,39.61c1.53,0,2.76-1.23,2.77-2.75,0-.81,0-1.73,0-2.63v.02c.02-.12.02-.24.02-.37,0-1.27-.51-2.44-1.34-3.28,4.37-.48,8.96-2.14,8.96-9.68v-.12c0-1.99-.77-3.81-2.02-5.16l-.02.05c.26-.75.41-1.56.41-2.4,0-1.03-.22-2.02-.59-2.85,0,0-1.64-.52-5.38,2.02l.13.03c-1.61-.45-3.29-.7-5.04-.7s-3.44.24-4.91.66c-3.76-2.54-5.4-2.02-5.4-2.02-.38.86-.59,1.81-.59,2.81,0,.86.16,1.68.42,2.38-1.26,1.35-2.02,3.17-2.02,5.16v.11c0,7.52,4.58,9.22,8.95,9.71-.69.68-1.14,1.6-1.24,2.62h.02c-.61.35-1.32.55-2.07.55-1.58,0-2.95-.87-3.68-2.17v-.02c-.62-1.06-1.7-1.82-2.99-2.01,0,0-1.92-.03-.14,1.2h.02c1.01.65,1.79,1.65,2.16,2.86,0,0,1.15,3.82,6.62,2.64,0,.19,0,.38,0,.57,0,1.53,1.25,2.76,2.78,2.76h4.18Z' />
                </svg>
            </a>
        </footer>
    )
}
