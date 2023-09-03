import React from 'react'

const ListTask = ({task}) => {
  return (
    <div>
        <div className='list-tasks'>
            {task.title}
            <button className='delete-btn'>Delete</button>

        </div>
      
    </div>
  )
}

export default ListTask
