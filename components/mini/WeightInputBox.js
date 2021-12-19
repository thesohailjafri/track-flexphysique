import React from 'react'
import LogNote from './LogNote'
export default function WeightInputBox() {
    return (
        <>
            <div className="inline-flex items-center gap-4">
                <span>
                    <input className='w-32 h-12 rounded p-2 text-center' type="text" />
                </span>
                <span className=' cursor-pointer w-12 h-12 bg-blue-600  rounded inline-grid place-items-center text-white'>KG</span>
                <span className=' cursor-pointer w-12 h-12 bg-blue-600 rounded inline-grid place-items-center text-white'>-</span>
                <span className='cursor-pointer w-12 h-12 bg-blue-600 rounded inline-grid place-items-center text-white'>+</span>
            </div>
        </>
    )
}
