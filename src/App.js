import React, { useCallback, useMemo, useState } from "react";
import events, { RESOURCE, LEGEND_TYPE } from "./events";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

const DragAndDropCalendar = withDragAndDrop(Calendar);

function App() {
  const [myEvents, setMyEvents] = useState(events);
  const localizer = momentLocalizer(moment);
  const [viewType, setViewType] = useState('day');
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

  const defaultDate = useMemo(() => new Date(2023, 9, 23), []);

  function eventStyleGetter(event, start, end, isSelected) {
    let bgColorHex = ''
    if (event.type === 'accepted') bgColorHex = '#8FC594'
     
    if (event.type === "pending") {
      bgColorHex = "#eca36f";
    }
  
    if (event.type === "new") {
      bgColorHex = "#e56767";
    }
  
    if (event.type === "cancel") {
      bgColorHex = "#b3b3b3";
    }
  
    if (event.type === "completed") {
      bgColorHex = "#6eb3c9";
    }

    var style = {
      backgroundColor: bgColorHex,
      borderRadius: "10px",
      minHeight: '50px',
      opacity: 1,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  }


  const handleChangeEvent = (e) => {
    const value = e.target.value;
    const cloneEvent = [...events].filter((event) => (
      event.resourceId == value
    ))

    setMyEvents(cloneEvent) 
  }

  return (
    <div className="p-20">
      <div className="legend-category">
        <p>Legend:</p>
        {LEGEND_TYPE.map((item) => {
          return (
          <div className={`legend-item ${item.color} `}>{item.label}</div>
        )})}
      </div>
      <div className="filter-section">
          <input placeholder="Search project" />
        <div>Select date</div>
        <div>
          <select onChange={handleChangeEvent}>
            {RESOURCE.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select value={viewType} onChange={(e) => setViewType(e.target.value)}>
            <option value="week">Week</option>
            <option value="day">Day</option>
          </select>
        </div>
        {/* <div>
          <select>
            <option value="daily">1-5</option>
            <option value="week">6-10</option>
          </select>
        </div> */}
      </div>
      <div className="calendar-page-container">
        <div className="filter-category">
          <h1>Categories</h1>
          <div></div>
        </div>
        <div className="calendar-custome-wrapper">
          <DragAndDropCalendar
            style={{
              // width:'1000px',
              height: '2700px'
            }}
            defaultDate={defaultDate}
            // defaultView={viewType}
            view={viewType}
            events={myEvents}
            localizer={localizer}
            onEventDrop={moveEvent}
            onEventResize={resizeEvent}
            popup
            resizable
            resourceTitleAccessor={(resource) => <div>{resource?.name}</div>}
            resources={RESOURCE}
            eventPropGetter={eventStyleGetter}
            formats={{ eventTimeRangeFormat: () => null }}
            components={{
              // eventWrapper: EventWrapperComponent,
              event: CustomEvent,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

const CustomEvent = ({ event }) => {
  let bgColor = "";
  if (event.type === "accepted") {
    bgColor = "bg-green";
  }

  if (event.type === "pending") {
    bgColor = "bg-orange";
  }

  if (event.type === "new") {
    bgColor = "bg-red";
  }

  if (event.type === "cancel") {
    bgColor = "bg-gray";
  }

  if (event.type === "completed") {
    bgColor = "bg-blue";
  }

  return (
    <div className={`custome-event ${bgColor}`}>
      <div>Customer: {event.customer}</div>
      <div>Agenda: {event.agenda}</div>
      <div>Time: {moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</div>
    </div>
  );
};
