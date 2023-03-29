import React from 'react'

export default function Gradients() {
    const data = [
        ['#bdc3c7', '#2c3e50'],
        ['#ffd89b', '#19547b'],
        ['#3A1C71', '#D76D77', '#FFAF7B'],
        ['#2C3E50', '#FD746C'],
        ['#3E5151', '#DECBA4'],
        ['#aa4b6b', '#6b6b83', '#2C5364'],
        ['#1f4037', '#99f2c8'],
        ['#dd3e54', '#6be585'],
        ['#544a7d', '#ffd452'],
        ['#4B79A1', '#283E51'],
        ['#0F2027', '#203A43', '#2C5364'],
        ['#654ea3', '#eaafc8'],
        ['#005AA7', '#FFFDE4'],
        ['#ad5389', '#3c1053'],
        ['#a8c0ff', '#3f2b96'],
        ['#355C7D', '#6C5B7B', '#C06C84'],
        ['#FC5C7D', '#6A82FB'],
        ['#c94b4b', '#4b134f'],
        ['#00b09b', '#96c93d'],
        ['#00F260', '#0575E6'],
        ['#e1eec3', '#f05053'],
        ['#283c86', '#45a247'],
        ['#30E8BF', '#FF8235'],
        ['#44A08D', '#093637'],
        ['#6190E8', '#A7BFE8'],
        ['#43C6AC', '#191654'],
        ['#093028', '#237A57'],
        ['#E8CBC0', '#636FA4'],
        ['#F3904F', '#3B4371'],
        ['#bdc3c7', '#2c3e50'],
        ['#A43931', '#1D4350'],
        ['#2c3e50', '#2980b9']
    ]
    return (
        <div className='gradients'>
            {data.map(element => {
                const gradient = `linear-gradient(to right, ${element.join(', ')})`
                return (
                    <div className='gradient_cart'>
                        <div
                            className='color'
                            style={{ background: gradient }}
                            onClick={e => {
                                e.preventDefault()
                                navigator.clipboard.writeText(gradient)
                            }}
                        ></div>
                        <div className='info'>
                            {element.map(item => {
                                return (
                                    <button
                                        onClick={e => {
                                            e.preventDefault()
                                            navigator.clipboard.writeText(item)
                                        }}
                                    >
                                        {item}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
