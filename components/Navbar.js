import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import {
    BsJournalPlus, BsPencilSquare, BsCalendar2X,
    BsBarChartLine, BsBarChart, BsGraphUp
} from 'react-icons/bs'


import { MdOutlineAreaChart, MdOutlineTimeline } from 'react-icons/md'
import { GrLineChart, GrBarChart } from 'react-icons/gr'
import {
    BiBarChartSquare, BiLineChart
} from 'react-icons/bi'

import { AiOutlineFundView } from 'react-icons/ai'
import { FaWeight } from 'react-icons/fa'

const gymItems = [
    {
        link: '/gym/track',
        title: 'Set Goal',
        icon: BsCalendar2X,
        meta: 'Set Big Three goal or any other weighted exercsie goal.'

    },
    {
        link: '/gym/track',
        title: 'Track Record',
        icon: BsPencilSquare,
        meta: 'Track gym PRs.'
    },
    {
        link: '/gym/view',
        title: 'View Records',
        icon: BsGraphUp,
        meta: 'View your gym PRs.'
    }
]

const caliItems = [
    {
        link: '/cali/track',
        title: 'Set Goal',
        icon: BsCalendar2X,
        meta: 'Set your calisthentic PR goals.'
    },
    {
        link: '/cali/track',
        title: 'Track Record',
        icon: BsPencilSquare,
        meta: 'Track your favourite body weight exercises progress.'
    },
    {
        link: '/cali/view',
        title: 'View Records',
        icon: BsBarChart,
        meta: 'View your exercises progress.'
    }
]

const weightItems = [
    {
        link: '/weight/track',
        title: 'Set Goal',
        icon: BsCalendar2X,
        meta: 'Set your body weight goal and work for it.'
    },
    {
        link: '/weight/track',
        title: 'Track Record',
        icon: BsPencilSquare,
        meta: 'Track your weight to view your progress.'
    },
    {
        link: '/weight/view',
        title: 'View Records',
        icon: BsBarChart,
        meta: 'View how much further you have came.'
    }
]

const navigations = {
    home: '',
    explore: 'explore',
    post: 'post',
    gym: 'gym',
    cali: 'cali',
    weight: 'weight',
    about: 'about',
    profile: 'profile',
}

export default function Navbar() {
    const router = useRouter()
    const [isHoveredOn, setIsHoveredOn] = useState(null)
    const [isOnWhatPage, setIsOnWhatPage] = useState(null)

    const handelOnMouseEnter = (whom, dropdown) => {
        if (dropdown) {
            const targetItem = document.getElementById(`navigation_${whom}`)
            targetItem.classList.remove('hidden')
            targetItem.classList.add('block')
            setTimeout(() => {
                targetItem.style.opacity = 100
            }, 50)
        }
        setIsHoveredOn(whom)
    }

    const handelOnMouseLeave = (whom, dropdown = false) => {
        if (dropdown) {
            const targetItem = document.getElementById(`navigation_${whom}`)
            targetItem.style.opacity = 0
            setTimeout(() => {
                targetItem.classList.remove('block')
                targetItem.classList.add('hidden')
            }, 300)
        }

        setIsHoveredOn(null)
    }

    useEffect(() => {
        let { pathname } = router
        pathname = pathname.split('/')
        setIsOnWhatPage(pathname[1])
    }, [router])

    return (
        <nav className='px-6 bg-white shadow-sm mb-4'>

            <ul className="flex justify-between gap-x-4 pt-4 text-lg font-medium  max-w-5xl mx-auto">
                <ul>
                    <Link href='/'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.home)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.home)}
                            className={classNames(
                                '--dropdown-underline',
                                {
                                    '--dropdown-underline-show': isOnWhatPage === navigations.home,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.home,
                                }
                            )}
                        >
                            TRACKfp</li>
                    </Link>
                </ul>

                <ul className="flex gap-x-8">
                    <Link href='/explore'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.explore)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.explore)}
                            className={classNames(
                                ' --dropdown-underline',
                                {
                                    '--dropdown-underline-show': isOnWhatPage === navigations.explore,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.explore,
                                }
                            )}
                        >
                            Explore</li>
                    </Link>
                    <Link href='/post'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.post)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.post)}
                            className={classNames(
                                ' --dropdown-underline',
                                {
                                    '--dropdown-underline-show': isOnWhatPage === navigations.post,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.post,
                                }
                            )}
                        >Post</li>
                    </Link>
                    <Link href='/gym'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.gym)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.gym)}
                            className={classNames(
                                ' --dropdown-underline',
                                {
                                    '--dropdown-underline-show': isOnWhatPage === navigations.gym,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.gym,
                                }
                            )}
                        >Gym</li>
                    </Link>
                    <Link href='/post'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.cali)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.cali)}
                            className={classNames(
                                ' --dropdown-underline',
                                {
                                    '--dropdown-underline-show': isOnWhatPage === navigations.cali,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.cali,
                                }
                            )}
                        >Calisthenics</li>
                    </Link>
                    <Link href='/weight'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.weight)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.weight)}
                            className={classNames(
                                '--dropdown-underline',
                                {
                                    ' --dropdown-underline-show': isOnWhatPage === navigations.weight,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.weight,
                                }
                            )}
                        >
                            Weight Management
                        </li>
                    </Link>

                </ul>

                <ul>
                    <Link href='/profile'>
                        <li
                            onMouseEnter={() => handelOnMouseEnter(navigations.profile)}
                            onMouseLeave={() => handelOnMouseLeave(navigations.profile)}
                            className={classNames(
                                '--dropdown-underline',
                                {
                                    ' --dropdown-underline-show': isOnWhatPage === navigations.profile,
                                },
                                {
                                    '--dropdown-underline-hide': isHoveredOn === navigations.profile,
                                }
                            )}
                        >
                            Profile
                        </li>
                    </Link>
                </ul>



            </ul>
        </nav >
    )
}


