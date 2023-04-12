import React from 'react'

function Alert({message}) {
  return (
    <div className='text-center px-2 py-1 bg-red-200 text-red-900 border border-red-900 rounded-lg mb-4'>
        <span>{message}</span>
    </div>
  )
}

export default Alert