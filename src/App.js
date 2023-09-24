import React, { useCallback, useMemo, useState } from "react";
import events, { RESOURCE, LEGEND_TYPE } from "./events";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

const DragAndDropCalendar = withDragAndDrop(Calendar);

function App() {
  const [myEvents, setMyEvents] = useState(events);
  const localizer = momentLocalizer(moment);

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

  return (
    <div className="p-20">
      <div>
        <span>Lengend</span>
        <span>Cancel</span>j<span>Pendin</span>
        <span>New Request</span>
        <span>Accepted</span>
        <span>Complete</span>
      </div>
      <div className="filter-section">
        <div>
          <input placeholder="Search project" />
        </div>
        <div>Select date</div>
        <div>
          <select>
            {RESOURCE.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select>
            <option value="daily">Daily</option>
            <option value="week">week</option>
          </select>
        </div>
        <div>
          <select>
            <option value="daily">1-5</option>
            <option value="week">6-10</option>
          </select>
        </div>
      </div>
      <div className="calendar-page-container">
        <div className="filter-category">
          <h1>Categories</h1>
          <div></div>
        </div>
        <div className="calendar-custome-wrapper">
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

  return (
    <div className={`p-10 h-full radius-10 ${bgColor}`}>
      <div>{event.title}</div>
      <div>{event.type}</div>
    </div>
  );
};

// const EventWrapperComponent = ({ event, children }) => {
//   const newChildren = { ...children };
//   const newChildrenProps = { ...newChildren.props };
//   newChildrenProps.className = `${newChildrenProps.className} outline-none border-none bg-red`;
//   newChildren.props = { ...newChildrenProps };

//   return <div>{newChildren}</div>;
// };
