import React from 'react'
import { Link } from 'react-router-dom'
import styles from './assets/styles/styles.module.scss'

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Link to='/generator'>Генератор</Link>
            <Link to='/todo'>Список</Link>
            <Link to='/gradients'>Градиенты</Link>
        </nav>
    )
}
