import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"

import moment from 'moment'

const localizer = momentLocalizer(moment)
const DragAndDropCalendar = withDragAndDrop(Calendar)

const myEventsList = [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2021, 12, 0),
        end: new Date(2021, 12, 1)
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2021, 12, 7),
        end: new Date(2021, 12, 10)
    },
    {
        id: 14,
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3))
    }
]

export default function Calender() {

    const [events, setEvents] = useState(myEventsList)

    const moveEvent = ({ event, start, end }) => {

        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        setEvents(nextEvents)
    }


    return (
        <div>
            <DragAndDropCalendar
                selectable
                onEventDrop={moveEvent}
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}


