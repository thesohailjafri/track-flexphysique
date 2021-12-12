import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart({ chartData }) {
    return (
        <Line
            type='line'
            data={chartData.data}
            options={chartData.options}
        />
    )
}
