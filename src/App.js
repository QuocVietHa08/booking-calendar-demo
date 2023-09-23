import React, { useCallback, useMemo, useState } from "react";
import events from "./events";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from 'moment'

const DragAndDropCalendar = withDragAndDrop(Calendar);

function App() {
  const [myEvents, setMyEvents] = useState(events);
  const localizer = momentLocalizer(moment)

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );

  const defaultDate = useMemo(() => new Date(2023, 9, 23), [])

  return (
    <div>
      <div className="height600">
        <div>hello</div>
        <DragAndDropCalendar
          defaultDate={defaultDate}
          defaultView={Views.DAY}
          events={myEvents}
          localizer={localizer}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          popup
          resizable
          resourceTitleAccessor={(resource) => <div>{resource?.name}</div>}
          resources= {  [{id: 1, name: 'John'}, {id:2, name: 'Linda'}]  }
        />

        
      </div>
    </div>
  );
}

export default App;
