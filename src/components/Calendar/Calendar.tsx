import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
import "./Calendar.css";
type Props = {};

const Calendar = (props: Props) => {
  const [events, setEvents] = useState<any>([
    { title: 'Meeting', start:new Date()},
    { title: ".Net & React Full Stack" , start: '2024-03-04'}
  ]);

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <FullCalendar
          locales={[trLocale]}
          locale="tr"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={false}
          selectable={false}
          selectMirror={true}
          weekends={true}
          events={events}
          select={(arg) => handleDateSelect(arg)} // tarihlerden herhangi birisi seçildiğinde tetiklenir.
          eventContent={renderEventContent} // tarihlerin gösterileceği fonksiyon, aslında bir component
          eventClick={(arg) => console.log(arg)} // tarihin içindeki eventlere tıklandığında tetiklenir
          eventsSet={(arg) => console.log(arg)} // ay,hafta,gün gibi seçimlerde tetiklenir.
        />
      </div>
    </div>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <span>{eventInfo.event.extendedProps.time}</span>
    </>
  );
}

export default Calendar;
