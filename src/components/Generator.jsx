import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from './Loader'

export default function Generator() {
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

    useEffect(() => {
        const timer = setTimeout(() => {
            generatePassword()
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    return (
        <>
            <Helmet>
                <title>Генератор паролей | Утилиты</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='generator'>
                    <div className='password_navigation'>
                        <strong>{password}</strong>
                        <div>
                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    generatePassword()
                                }}
                            />
                            <button
                                onClick={e => {
                                    e.preventDefault()
                                    navigator.clipboard.writeText(password)
                                }}
                            />
                        </div>
                    </div>
                    {isValid ? null : <p>Для генерации пароля необходимо выбрать хотя бы одну группу символов и установить длину больше нуля.</p>}
                    <div className='password_length'>
                        <button onClick={handleIncrementLength}>+</button>
                        <strong>{passwordLength}</strong>
                        <button onClick={handleDecrementLength}>-</button>
                    </div>
                    <div className='password_chars'>
                        <button className={letters ? 'active' : ''} onClick={() => setLetters(!letters)}>
                            Буквы
                        </button>
                        <button className={digits ? 'active' : ''} onClick={() => setDigits(!digits)}>
                            Цифры
                        </button>
                        <button className={symbols ? 'active' : ''} onClick={() => setSymbols(!symbols)}>
                            Символы
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
