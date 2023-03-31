import React from "react"
import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Loader from "./Loader"
import { getGradientAll, updateGradientCopies } from "../api/gradients"

export default function Gradients() {
    const [isLoading, setIsLoading] = useState(true)
    const [gradients, setGradients] = useState([])

    useEffect(() => {
        const fetchGradients = async () => {
            try {
                const response = await getGradientAll()
                setGradients(response.data)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
                setIsLoading(false)
            }
        }
        fetchGradients()
    }, [])

    return (
        <>
            <Helmet>
                <title>Градиенты | Утилиты</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='gradients'>
                    {gradients.map((element, index) => {
                        const gradient = `linear-gradient(to right, ${element.colors.join(", ")})`
                        return (
                            <div key={index} className='gradient_cart'>
                                <div
                                    className='color'
                                    style={{ background: gradient }}
                                    onClick={e => {
                                        navigator.clipboard.writeText(gradient)
                                        updateGradientCopies(element.id)
                                        e.target.classList.add("active")
                                        setTimeout(() => {
                                            e.target.classList.remove("active")
                                        }, 600)
                                    }}
                                ></div>
                                <div className='info'>
                                    {element.colors.map((item, index) => {
                                        return (
                                            <button
                                                key={index}
                                                onClick={e => {
                                                    e.preventDefault()
                                                    navigator.clipboard.writeText(item)
                                                    e.target.classList.add("active")
                                                    setTimeout(() => {
                                                        e.target.classList.remove("active")
                                                    }, 600)
                                                }}
                                            >
                                                <span
                                                    style={{ backgroundColor: item }}
                                                    onClick={e => {
                                                        e.stopPropagation()
                                                        e.currentTarget.parentNode.click()
                                                    }}
                                                ></span>
                                                {item.slice(1)}
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
