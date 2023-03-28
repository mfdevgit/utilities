import React, { useEffect, useState } from 'react'

export default function Generator() {
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
        if (available.length === 0) {
            setPassword('Выберите массив!')
        } else {
            for (let i = 0; i < passwordLength; i++) {
                const random = Math.floor(Math.random() * available.length)
                result += available[random]
            }
            setPassword(result)
        }
    }

    useEffect(() => {
        generatePassword()
    }, [])

    return (
        <>
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
                <div className='password_length'>
                    <button
                        onClick={e => {
                            e.preventDefault()
                            setPasswordLength(prev => prev + 1)
                        }}
                    >
                        +
                    </button>
                    <strong>{passwordLength}</strong>
                    <button
                        onClick={e => {
                            e.preventDefault()
                            setPasswordLength(prev => prev - 1)
                        }}
                    >
                        -
                    </button>
                </div>
                <div className='password_chars'>
                    <button
                        className={letters ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault()
                            setLetters(!letters)
                        }}
                    >
                        Буквы
                    </button>
                    <button
                        className={digits ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault()
                            setDigits(!digits)
                        }}
                    >
                        Цифры
                    </button>
                    <button
                        className={symbols ? 'active' : ''}
                        onClick={e => {
                            e.preventDefault()
                            setSymbols(!symbols)
                        }}
                    >
                        Символы
                    </button>
                </div>
            </div>
        </>
    )
}
