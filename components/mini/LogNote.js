import React from 'react'
import { FaRegStickyNote } from 'react-icons/fa'
import { PencilAltIcon } from '@heroicons/react/solid'
export default function LogNote() {
    return (
        <div className="inline-flex flex-col items-center gap-x-4 gap-y-1 max-w-80">
            <span className='self-start bg-blue-600 p-2 text-white rounded mb-2'>
                <FaRegStickyNote className='mr-4 text-white' />
                <label htmlFor="note" className='' >Log Note</label>
            </span>
            <textarea className='p-2 h-40 w-full rounded' name="" id="note" cols="30" rows="10"></textarea>
        </div>
    )
}
