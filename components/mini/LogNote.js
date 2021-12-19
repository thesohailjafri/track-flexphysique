import React from 'react'
import { GrNote } from 'react-icons/gr'
import { PencilAltIcon } from '@heroicons/react/solid'
export default function LogNote() {
    return (
        <div className="inline-flex flex-col items-center gap-x-4 gap-y-1 max-w-80">
            <span className='self-start'>
                <GrNote className='mr-4' />
                <label htmlFor="note" >Log Note</label>
            </span>
            <textarea className='p-2 h-40 w-full' name="" id="note" cols="30" rows="10"></textarea>
        </div>
    )
}
