import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  subHours,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time, ListHours } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

function Dashboard() {
  const [schedule, setScheudule] = useState([]);
  const [date, setDate] = useState(subHours(new Date(), 3));

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedules', {
        params: { date },
      });
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

      const data = range.map((hour) => {
        const checkDateIni = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const checkDate = subHours(checkDateIni, 3);

        const compareDate = utcToZonedTime(checkDate, timeZone);

        return {
          time: `${hour}:00`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
           isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setScheudule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ListHours>
        <ul>
          {schedule.map((time) => (
            <Time key={time.time} past={time.past} available={!time.appointment}>
              <strong>{time.time}</strong>
              <span>
                {time.appointment ? time.appointment.user.name : 'Em aberto'}
              </span>
            </Time>
          ))}
        </ul>
      </ListHours>
    </Container>
  );
}

export default Dashboard;
