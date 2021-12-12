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
                    <div title="gym"
                        className='relative'
                        onMouseEnter={() => handelOnMouseEnter(navigations.gym, true)}
                        onMouseLeave={() => handelOnMouseLeave(navigations.gym, true)}
                    >
                        <DropDownMenu itemsAry={gymItems} item='Gym' itemSmall={navigations.gym}
                            isHoveredOn={isHoveredOn} isOnWhatPage={isOnWhatPage} />
                    </div>
                    <div title="calisthenics"
                        onMouseEnter={() => handelOnMouseEnter(navigations.cali, true)}
                        onMouseLeave={() => handelOnMouseLeave(navigations.cali, true)}
                    >
                        <DropDownMenu itemsAry={caliItems} item='Calisthenics' itemSmall={navigations.cali}
                            isHoveredOn={isHoveredOn} isOnWhatPage={isOnWhatPage} />
                    </div>
                    <div title="weight"
                        onMouseEnter={() => handelOnMouseEnter(navigations.weight, true)}
                        onMouseLeave={() => handelOnMouseLeave(navigations.weight, true)}
                    >
                        <DropDownMenu itemsAry={weightItems} item='Weight Management' itemSmall={navigations.weight}
                            isHoveredOn={isHoveredOn} isOnWhatPage={isOnWhatPage} />
                    </div>
                </ul>
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
        </nav >
    )
}


const LiElement = ({ val }) => {
    const Icon = val.icon
    return (
        <Link href={val.link}>
            <li className={classNames(
                '--dropdown-item ',
                ' z-10',
                'flex gap-x-4 items-start',
            )}
            >
                <div className='pt-2 text-blue-600' >
                    <Icon size={22} />
                </div>
                <div className='inline-flex flex-col'>
                    <span className='--dropdown-item-title'>{val.title}</span>
                    <span className='--dropdown-item-meta'>{val.meta}</span>
                </div>
            </li>
        </Link>
    )
}

const DropDownMenu = ({ itemsAry, item, itemSmall, isHoveredOn, isOnWhatPage }) => {
    return (
        <>
            <li
                className={classNames(
                    '--dropdown-block',
                    '--dropdown-underline',
                    {
                        '--dropdown-underline-show': isOnWhatPage === itemSmall,
                    },
                    {
                        '--dropdown-underline-hide': isHoveredOn === itemSmall,
                    }
                )}>{item}</li>
            <ul id={'navigation_' + itemSmall}
                style={{ opacity: 0 }}
                className={classNames(
                    'transition-opacity duration-300 ease-in-out',
                    'absolute',
                    'hidden',
                )}>
                <li className="py-2"></li>
                <li className="--dropdown">
                    {itemsAry.map(val => {
                        return (
                            <LiElement val={val} />
                        )
                    })}
                </li>
            </ul>
        </>
    )
}