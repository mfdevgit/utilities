import React, { useState } from 'react'

export default function Todo() {
    const [newTask, setNewTask] = useState('')
    const [allTasks, setAllTasks] = useState(['Онлайн-магазин', 'TODO', 'Интро (несколько)'])

    const handleAddTask = () => {
        if (newTask === '') {
            return
        }
        setAllTasks([...allTasks, newTask])
        setNewTask('')
    }
    const handleRemoveTask = value => {
        setAllTasks(prevTasks => prevTasks.filter(task => task !== value))
    }

    return (
        <div className='todo'>
            {allTasks.map(task => {
                return (
                    <div key={task}>
                        <span>{task}</span>
                        <svg onClick={() => handleRemoveTask(task)} className='delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                            <path d='m6.25,43.75c0,2.07,1.68,3.75,3.75,3.75h30c2.07,0,3.75-1.68,3.75-3.75v-24.37H6.25v24.37Zm28.13-18.75h3.75v16.88h-3.75v-16.88Zm-11.25,0h3.75v16.88h-3.75v-16.88Zm-11.25,0h3.75v16.88h-3.75v-16.88Zm33.76-15h-11.25v-3.74c0-2.07-1.69-3.75-3.75-3.75h-11.25c-2.07,0-3.75,1.68-3.75,3.75v3.75H4.37c-1.04,0-1.87.83-1.87,1.87v1.87c0,1.04.84,1.87,1.87,1.87h41.26c1.04,0,1.87-.83,1.87-1.87v-1.87c0-1.04-.83-1.88-1.86-1.88Zm-15.01,0h-11.25v-3.74h11.25v3.74Z' />
                        </svg>
                    </div>
                )
            })}
            <div>
                <input value={newTask} onChange={e => setNewTask(e.target.value)} type='text' />
                <svg onClick={handleAddTask} className='send' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'>
                    <path d='m38.57.2c3.81-1.09,7.33,2.42,6.23,6.23l-9.67,33.67c-1.61,5.61-9.11,6.68-12.19,1.73l-4.27-6.86c-1.18-1.9-.89-4.36.69-5.95l9.11-9.11c.94-.94.94-2.46,0-3.4-.94-.94-2.46-.93-3.4,0l-9.11,9.11c-1.58,1.58-4.05,1.87-5.95.69l-6.86-4.27c-4.94-3.08-3.88-10.57,1.73-12.19L38.57.2Z' />
                </svg>
            </div>
        </div>
    )
}
