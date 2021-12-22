import React, { useState, Fragment } from 'react'
import Calender from '../../components/util/Calender'
import LineChart from '../../charts/LineChart'
import WeightInputBox from '../../components/mini/WeightInputBox'
import LiftingWeightInputBox from '../../components/mini/LiftingWeightInputBox'
import ExerciseDropdown from '../../components/mini/ExerciseDropdown'
import LogNote from '../../components/mini/LogNote'
import { Dialog, Transition } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
const data = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Squat',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(96, 165, 250, 1)',
            borderWidth: 2,
            data: [165, 159, 180, 181, 156]
        },
    ]
}
const optionsThree = {
    title: {
        display: true,
        text: 'Big Three',
        fontSize: 20
    },
    legend: {
        display: true,
        position: 'top'
    },

}
const chartData1 = {
    data: data,
    options: optionsThree,
}
export default function exercise() {
    let [isNewExerciseDialogOpen, setIsNewExerciseDialogOpen] = useState(false)


    function closeModal() {
        setIsNewExerciseDialogOpen(false)
    }

    function openModal() {
        setIsNewExerciseDialogOpen(true)
    }
    return (
        <div className='grid gap-4 grid-cols-12'
        >
            <div className='--card col-span-8'>
                <LineChart chartData={chartData1} />
            </div>
            <div className="grid gap-4 justify-center col-span-4">
                <ExerciseDropdown />
                <WeightInputBox />
                <LiftingWeightInputBox />
                <LogNote />
                <button className='bg-blue-600 text-white p-2 rounded w-80'>Add Log</button>
                <div className='inline-flex justify-between'>
                    <button className='bg-blue-600 text-white p-2 rounded w-40'>Hide Calculator</button>
                    <button className='bg-blue-600 text-white p-2 rounded w-36'
                        onClick={openModal}
                    >Add Exericse</button>
                </div>

            </div>


            <div className='--card col-span-full'>
                <Calender />
            </div>

            <Transition appear show={isNewExerciseDialogOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add New Exercise
                                </Dialog.Title>
                                <div className="mt-2 flex">
                                    <input type="text" name="" id=""
                                        placeholder='Exercise Name'
                                        className='py-2 rounded focus:outline-none
                                        border-b-2 border-gray-300 w-full
                                        ' />
                                    <input type="text" name="" id=""
                                        placeholder='Exercise Name'
                                        className='py-2 rounded focus:outline-none
                                        border-b-2 border-gray-300 w-full
                                        ' />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 mr-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}
