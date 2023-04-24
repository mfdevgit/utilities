import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import data from './assets/data/gradients.json'
import styles from './assets/styles/styles.module.scss'

const handleGradientClick = (e, gradient) => {
    navigator.clipboard.writeText(gradient)

    e.target.classList.add(styles.active)
    setTimeout(() => {
        e.target.classList.remove(styles.active)
    }, 600)
}
const handleColorClick = (e, color) => {
    navigator.clipboard.writeText(color)

    e.target.classList.add(styles.active)
    setTimeout(() => {
        e.target.classList.remove(styles.active)
    }, 600)
}
const handleColorTitleClick = e => {
    e.stopPropagation()
    e.currentTarget.parentNode.click()
}
const createGradient = colors => {
    return `linear-gradient(to right, ${colors.join(', ')})`
}

export default function GradientsModule() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Helmet>
                <title>Градиенты | Утилиты</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.gradients}>
                    {data.map((element, index) => {
                        const gradient = createGradient(element.colors)
                        return (
                            <div key={index} className={styles.cart}>
                                <div className={styles.gradient} style={{ background: gradient }} onClick={e => handleGradientClick(e, gradient)} />
                                <div className={styles.colors}>
                                    {element.colors.map((color, index) => {
                                        return (
                                            <button key={index} onClick={e => handleColorClick(e, color)}>
                                                <span style={{ backgroundColor: color }} onClick={e => handleColorTitleClick(e)}></span>
                                                {color.slice(1)}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}
