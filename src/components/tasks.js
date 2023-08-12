import React from 'react'

function Tasks(props) {
    return (
        <div className='card text-bg-warning m-1 text-end'>
            <div className='card-body d-flex justify-content-between'>
                <div
                    style={{ maxHeight: '90px' }} className='overflow-auto h-75'
                >
                    <h3 className='card-title' title='כותרת משימה'>{props.title}</h3>
                    <p className='card-text' title='תיאור משימה'>{props.desc}</p>
                </div>
                <div className='btn-group-vertical'>
                    <button
                        title='למחוק'
                        className='btn btn-outline-danger'
                    >🗑</button>
                    <button
                        title='לערוך'
                        className='btn btn-outline-secondary'
                    > ✏</button>
                </div>
            </div>
        </div>
    )
}

export default Tasks