import classNames from 'classnames'
import Head from 'next/head'
import LineChart from '../charts/LineChart'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { GrFormNextLink } from 'react-icons/gr'
import FirstLetter from '../components/util/FirstLetter'
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
    }, {
      label: 'Bench',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(37, 99, 235, 1)',
      borderWidth: 2,
      data: [80, 90, 100, 110, 116]
    }, {
      label: 'Deadlift',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [150, 155, 160, 180, 220]
    }
  ]
}

const data1 = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'weight',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(96, 165, 250, 1)',
      borderWidth: 2,
      data: [110, 139, 120, 140, 170]
    }
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

const optionsDead = {
  title: {
    display: true,
    text: 'Deadlift',
    fontSize: 20
  },
  legend: {
    display: false,
    position: 'right'
  }
}

const optionsSqaut = {
  title: {
    display: true,
    text: 'Squats',
    fontSize: 20
  },
  legend: {
    display: false,
    position: 'right'
  }
}

const optionsBench = {
  title: {
    display: true,
    text: 'Bench Press',
    fontSize: 20
  },
  legend: {
    display: false,
    position: 'right'
  }
}

const optionsWeight = {
  title: {
    display: true,
    text: 'Body Weight',
    fontSize: 20
  },
  legend: {
    display: false,
    position: 'right'
  }
}



const chartData = {
  data: data1,
  options: optionsWeight
}

const chartData1 = {
  data: data,
  options: optionsThree,
}

const chartData2 = {
  data: data1,
  options: optionsSqaut
}
const chartData3 = {
  data: data1,
  options: optionsBench
}
const chartData4 = {
  data: data1,
  options: optionsDead
}


const date = new Date().toLocaleDateString()

const weightData = [
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  },
  {
    weight: 83.3,
    date,
    note: 'lorem lorem lorem'
  }
]

const number = [1, 2, 3]

const bigthree = [
  {
    name: 'Bench Press',
    oneRepMax: 120,
    oneRepMaxDate: '12/12/21',
    isWeighingInKg: true,
    multiRepMax: 100,
    multiReps: 8,
    multiRepMaxDate: '5/12/21',
  },
  {
    name: 'Sqauts',
    oneRepMax: 140,
    oneRepMaxDate: '12/12/21',
    isWeighingInKg: true,
    multiRepMax: 120,
    multiReps: 8,
    multiRepMaxDate: '5/12/21',
  },
  {
    name: 'Deadlift',
    oneRepMax: 180,
    oneRepMaxDate: '12/12/21',
    isWeighingInKg: true,
    multiRepMax: 140,
    multiReps: 8,
    multiRepMaxDate: '5/12/21',
  }
]




export default function Home() {
  return (
    <>
      <Head>
        <title>Home || TRACK-PR</title>
      </Head>
      <div className={classNames(
        'grid gap-y-4'
      )}>

        <div className='grid grid-cols-12 gap-x-4'>
          <div className=' col-span-9 --card'>
            <LineChart chartData={chartData} />
          </div>
          <div className='grid col-span-3 --card gap-y-1'>

            {
              weightData.slice(0, 6).map((item) => {
                return (
                  <div className='flex gap-x-2 items-start'>
                    <div className='mt-2 text-blue-600'>
                      <AiOutlineFieldTime size={25} />
                    </div>
                    <div className=''>
                      <div className='inline-flex gap-x-2 items-baseline '>
                        <span className='first-letter:text-xl'>{item.weight} Kgs</span>
                        <span className='text-sm text-gray-600'>({item.date})</span>
                      </div>
                      <div className=' text-gray-600'>{item.note}</div>
                    </div>
                  </div>
                )
              })
            }
            <div className='flex justify-between items-end'>
              <div className='inline-flex justify-center gap-x-1 mt-2 '>
                {number.map((item) => {
                  return (
                    <span className=' bg-blue-400 w-6 h-6 text-center rounded-sm text-white cursor-pointer'>{item}</span>
                  )
                })}
              </div>
              <span className='inline bg-blue-400 h-6 text-center rounded-sm text-white cursor-pointer px-2'>
                View All
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-x-4'>
          <div className=' col-span-9  --card'>
            <LineChart chartData={chartData1} />
          </div>
          <div className=' col-span-3 grid gap-y-4'>
            {bigthree.map((item) => {
              return (
                <div className=' --card flex flex-col justify-between'>
                  <div className=' text-blue-600 flex justify-between items-end'>
                    <span className=' first-letter:text-xl'>
                      {item.name}
                    </span>
                    <span className='text-sm cursor-pointer'>
                      View All <GrFormNextLink className='inline' />
                    </span>
                  </div>
                  <div>1 Rep Max : {item.oneRepMax} {item.isWeighingInKg ? 'Kgs' : 'Lbs'}</div>
                  <div>Multi Reps Max : {item.multiRepMax} {item.isWeighingInKg ? 'Kgs' : 'Lbs'} X {item.multiReps} </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className='text-xl border-b-2'>
          Favourite Movements
        </div>

        <div className='grid grid-cols-12 gap-x-4'>
          <div className=' col-span-4  --card'>
            <LineChart chartData={chartData2} />
          </div>
          <div className=' col-span-4 --card'>
            <LineChart chartData={chartData3} />
          </div>
          <div className=' col-span-4  --card'>
            <LineChart chartData={chartData4} />
          </div>
        </div>

      </div>
    </>
  )
}
