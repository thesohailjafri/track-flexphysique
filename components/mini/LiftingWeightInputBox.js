import React from 'react'

export default function LiftingWeightInputBox() {
    return (
        <div className="inline-flex items-center gap-x-4">
            <span className='bg-white rounded'>

                <span>
                    <input className='text-2xl w-12 h-12 rounded p-2 text-center focus:outline-none' type="text" />
                </span>
                <span className='text-2xl'>x</span>
                <span>
                    <input className='text-2xl w-32 h-12 rounded p-2 text-center focus:outline-none' type="text" />
                </span>
            </span>
            <span className=' cursor-pointer w-12 h-12 bg-blue-600 text-white rounded inline-grid place-items-center'>KG</span>
            <span className=' cursor-pointer w-12 h-12 bg-blue-600 text-white rounded inline-grid place-items-center'>+</span>

        </div>
    )
}
