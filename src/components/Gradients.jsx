import React from 'react'

const data = [
    ['#bdc3c7', '#2c3e50'],
    ['#0f2027', '#203a43', '#2c5364'],
    ['#2c3e50', '#fd746c'],
    ['#3a1c71', '#d76d77', '#ffaf7b'],
    ['#3e5151', '#decba4'],
    ['#003973', '#e5e5be'],
    ['#355c7d', '#6c5b7b', '#c06c84'],
    ['#1f4037', '#99f2c8'],
    ['#ea72ad', '#faff89'],
    ['#544a7d', '#ffd452'],
    ['#283e51', '#4b79a1'],
    ['#654ea3', '#eaafc8'],
    ['#9491e2', '#aff2d8'],
    ['#ffa585', '#ffeda0'],
    ['#dd5e89', '#f7bb97'],
    ['#1d2b64', '#f8cdda'],
    ['#005aa7', '#fffde4'],
    ['#c94b4b', '#4b134f'],
    ['#e1eec3', '#f05053'],
    ['#7aa1d2', '#dbd4b4', '#cc95c0'],
    ['#30e8bf', '#ff8235'],
    ['#44a08d', '#093637'],
    ['#283048', '#859398'],
    ['#6190e8', '#a7bfe8'],
    ['#b190ba', '#e8b595'],
    ['#616161', '#9bc5c3'],
    ['#43c6ac', '#191654'],
    ['#093028', '#237a57'],
    ['#636fa4', '#e8cbc0'],
    ['#f3904f', '#3b4371'],
    ['#2c3e50', '#2980b9'],
    ['#00416a', '#e4e5e6'],
    ['#292e49', '#536976'],
    ['#00467f', '#a5cc82']
]

export default function Gradients() {
    return (
        <div className='gradients'>
            {data.map((element, index) => {
                const gradient = `linear-gradient(to right, ${element.join(', ')})`
                return (
                    <div key={index} className='gradient_cart'>
                        <div
                            className='color'
                            style={{ background: gradient }}
                            onClick={e => {
                                e.preventDefault()
                                navigator.clipboard.writeText(gradient)
                            }}
                        ></div>
                        <div className='info'>
                            {element.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={e => {
                                            e.preventDefault()
                                            navigator.clipboard.writeText(item)
                                        }}
                                    >
                                        <span style={{ backgroundColor: item }}></span>
                                        {item.slice(1)}
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
