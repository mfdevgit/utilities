import React, { useState, useEffect } from "react"
import Loader from "./Loader"

export default function About() {
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
            {isLoading ? (
                <Loader />
            ) : (
                <div className='about'>
                    <p>Привет,</p>
                    <p>Я пока не определил, что именно будет на главной странице, но всё же решил создать её отдельный путь для личного удобства.</p>
                    <p>Если вы оказались на этой странице, просто воспользуйтесь меню выше, чтобы открыть одну из утилит.</p>
                    <p>Добра!</p>
                </div>
            )}
        </>
    )
}
