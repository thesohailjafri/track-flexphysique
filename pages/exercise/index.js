import React from 'react'
import Calender from '../../components/util/Calender'
import LineChart from '../../charts/LineChart'
import WeightInputBox from '../../components/mini/WeightInputBox'
import LiftingWeightInputBox from '../../components/mini/LiftingWeightInputBox'
import ExerciseDropdown from '../../components/mini/ExerciseDropdown'
import LogNote from '../../components/mini/LogNote'
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
export default function gym() {
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
                    <button className='bg-blue-600 text-white p-2 rounded w-36'>Add Exericse</button>
                </div>

            </div>


            <div className='--card col-span-full'>
                <Calender />
            </div>
        </div>
    )
}
