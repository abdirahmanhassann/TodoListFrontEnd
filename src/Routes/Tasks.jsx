import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Tasks() {
const [tasks, setTasks] = useState([]);
const [selectedTask, setSelectedTask] = useState(null);
const [title, setTitle] = useState('');
const [description, setDescription] =useState('');

useEffect(()=>{
    window. scrollTo({ top: 0, left: 0});
    getTasks();
},[])
function getTasks(){
    fetch('')
    .then(res=>res.json())
    .then(res=> setTasks(res));
    console.log(tasks);
}
function handleChange(e){    
    console.log(e.target)
    setSelectedTask(i=>{
        return {
            ...i,
            [e.target.name]:[e.target.value]
        }
    })
    
}
function addNewTask() {

    if (!title.trim()) return;
    setTasks([
        ...tasks,
        {
            id: tasks.length+1,
            title:title,
            description:description,
            completed: false
        }
    ]);
    setTitle('');
    setDescription('');
    //fetch()
}

function selectTask(task) {
    setSelectedTask(task);
}

function updateTask() {
    console.log(selectedTask,tasks)
    setTasks(tasks.map(t =>
        t.id === selectedTask.id
            ? { ...t, title: selectedTask.title, description: selectedTask.description}
            : t
    ));
    setSelectedTask(null);
    //fetch ('update')
    // .then(res=>res.json)
    // .then(res=> setTasks(res))
}

function deleteTask() {

    setTasks(tasks.filter(t => t.id !== selectedTask.id));
    setSelectedTask(null);
    //fetch()
}

return (
    <div className='main-top-div' style={{ display: 'flex', gap: '32px' }}>
        <div className='main-centre-div' style={{ flex: 1 }}>
            <h1>Tasks</h1>
            <Input
                placeholder='Add a new task...'
                className='input'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Input
                placeholder='Description'
                className='input'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button className='submit-button' onClick={addNewTask}>Add Task</button>
            <div style={{ marginTop: '20px' }}>
                <h3>Tasks</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tasks.length > 0 && tasks.map(task => (
                        <li
                            key={task.id}
                            className='list'
                            style={{
                                border: selectedTask?.id === task.id ? '2px solid #1976d2' : '1px solid #ccc',
                                background: task.completed ? '#e0ffe0': '#f5f5f5'
                            }}
                            onClick={() => selectTask(task)}
                        >
                            <strong style={{color:'#555'}}>{task.title}</strong>
                            {task.completed && <span style={{ color: 'green', marginLeft: '8px' }}>(Completed)</span>}
                            <div style={{ fontSize: '0.9em', color: '#555' }}>{task.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {selectedTask && (
            <div className='selectedTask'>
                <h2>Edit Task</h2>
                <Input
                    value={selectedTask.title}
                    name='title'
                    onChange={e => handleChange(e)}
                    placeholder='Title'
                    fullWidth
                    style={{ marginBottom: '12px' }}
                />
                <Input
                    value={selectedTask.description}
                    name='description'
                    onChange={e => handleChange(e)}
                    placeholder='Description'
                    fullWidth
                    style={{ marginBottom: '12px' }}
                />
                <div style={{ marginBottom: '12px' }}>
                    <label>
                        <input
                            type='checkbox'
                            // checked={editCompleted}
                            // onChange={e => setEditCompleted(e.target.checked)}
                        />{' '}
                        Mark as completed
                    </label>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className='submit-button' onClick={updateTask}>Save</button>
                    <button
                        style={{ background: '#e57373', color: '#333', border: 'none', padding: '8px 16px', borderRadius: '4px' }}
                        onClick={deleteTask}
                    >
                        Delete
                    </button>
                    <button
                        style={{ background: '#eee', color: '#333', border: 'none', padding: '8px 16px', borderRadius: '4px' }}
                        onClick={() => setSelectedTask(null)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        )}
    </div>
)
}

export default Tasks