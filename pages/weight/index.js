import React from 'react'
import Calender from '../../components/util/Calender'
import LineChart from '../../charts/LineChart'
import WeightInputBox from '../../components/mini/WeightInputBox'
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
export default function track() {
    return (
        <div className='grid gap-4 grid-cols-12'
        >
            <div className="flex flex-col gap-4 items-center col-span-full">
                <WeightInputBox />
                <button className='bg-blue-600 text-white p-2 rounded w-32'>Add Log</button>
            </div>

            <div className='--card col-span-full'>
                <LineChart chartData={chartData1} />
            </div>
            <div className='--card col-span-full'>
                <Calender />
            </div>
        </div>
    )
}
