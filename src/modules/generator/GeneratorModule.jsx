import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import styles from './assets/styles/styles.module.scss'

export default function GeneratorModule() {
    const [isLoading, setIsLoading] = useState(true)
    const [isValid, setIsValid] = useState(true)
    const [password, setPassword] = useState('')
    const [letters, setLetters] = useState(true)
    const [digits, setDigits] = useState(true)
    const [symbols, setSymbols] = useState(false)
    const [passwordLength, setPasswordLength] = useState(18)
    const passwordChars = {
        letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        digits: '0123456789',
        symbols: '!@#$%^&*()_-+={}[]|:;"<>,.?/'
    }

    const generatePassword = () => {
        let result = ''
        let available = ''
        if (letters) available += passwordChars.letters
        if (digits) available += passwordChars.digits
        if (symbols) available += passwordChars.symbols
        if (available.length === 0 || passwordLength <= 0) {
            setPassword('')
            setIsValid(false)
        } else {
            setIsValid(true)
            for (let i = 0; i < passwordLength; i++) {
                const random = Math.floor(Math.random() * available.length)
                result += available[random]
            }
            setPassword(result)
        }
    }
    const handleIncrementLength = e => {
        if (e.shiftKey || e.ctrlKey) {
            setPasswordLength(prev => prev + 10)
        } else {
            setPasswordLength(prev => prev + 1)
        }
    }
    const handleDecrementLength = e => {
        if (e.shiftKey || e.ctrlKey) {
            setPasswordLength(prev => prev - 10)
        } else {
            setPasswordLength(prev => prev - 1)
        }
    }
    const handleRefreshPassword = e => {
        generatePassword()

        e.target.classList.add(styles.active)
        setTimeout(() => {
            e.target.classList.remove(styles.active)
        }, 300)
    }
    const handleCopyPassword = e => {
        navigator.clipboard.writeText(password)

        e.target.classList.add(styles.active)
        setTimeout(() => {
            e.target.classList.remove(styles.active)
        }, 300)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            generatePassword()
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Helmet>
                <title>Генератор паролей | Утилиты</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.generator}>
                    <div className={styles.navigation}>
                        <strong>{password}</strong>
                        <div>
                            <button onClick={handleRefreshPassword} />
                            <button onClick={handleCopyPassword} />
                        </div>
                    </div>
                    {!isValid && (
                        <p className={styles.error}>
                            Для генерации пароля необходимо выбрать хотя бы одну группу символов и установить длину больше нуля.
                        </p>
                    )}
                    <div className={styles.length}>
                        <button onClick={handleIncrementLength}>+</button>
                        <strong>{passwordLength}</strong>
                        <button onClick={handleDecrementLength}>-</button>
                    </div>
                    <div className={styles.chars}>
                        <button className={letters ? styles.active : undefined} onClick={() => setLetters(!letters)}>
                            Буквы
                        </button>
                        <button className={digits ? styles.active : undefined} onClick={() => setDigits(!digits)}>
                            Цифры
                        </button>
                        <button className={symbols ? styles.active : undefined} onClick={() => setSymbols(!symbols)}>
                            Символы
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
