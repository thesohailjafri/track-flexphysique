import React from 'react'

export default function CaliInputBox() {
    return (
        <div className="inline-flex items-center gap-x-4">
            <span>
                <input className='text-2xl w-48 h-12 rounded p-2 text-center outline-none' type="text" />
            </span>
            <span className=' cursor-pointer w-12 h-12 bg-blue-600 text-white rounded inline-grid place-items-center'>Sec</span>
            <span className=' cursor-pointer w-12 h-12 bg-blue-600 text-white rounded inline-grid place-items-center'>+</span>

        </div>
    )
}
