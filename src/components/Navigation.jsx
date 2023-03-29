import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className='navigation'>
            <Link to='/generator'>Генератор</Link>
            <Link to='/gradients'>Градиенты</Link>
        </nav>
    )
}
