import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

interface DateData {
    date: number,
    dayName: string,
    month: number,
    monthName: string,
    year: number,
    fullDate: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dt: any
};

// OUTDATED
// offset: number, date: number, month: number, year: number
export function getDate(dayOffset: number, weekOffset: number): DateData {
    // let dt = dayjs().year(year).month(month).date(date + offset);
    let dt = dayjs().add(weekOffset, 'week').add(dayOffset + 7, 'day');

    if (dt.isoWeekday() !== dt.startOf('isoWeek').isoWeekday()) {
        dt = dayjs().add(weekOffset, 'week').add(dayOffset, 'day');
    }

    const result = {
        date: dt.date(),
        dayName: dt.format('ddd'),
        month: dt.month(),
        monthName: dt.format('MMMM'),
        year: dt.year(),
        fullDate: dt.format('YYYY-MM-DD'),
        dt: dt
    };
    return result;
}

export function getWeekdays(dayIndex: number, weekOffset: number): DateData {
    const dtw = dayjs().add(weekOffset, 'week').startOf('isoWeek');
    
    const dt = dtw.add(dayIndex, 'day');

    
    const result = {
        date: dt.date(),
        dayName: dt.format('ddd'),
        month: dt.month(),
        monthName: dt.format('MMMM'),
        year: dt.year(),
        fullDate: dt.format('YYYY-MM-DD'),
        dt: dt
    };

    return result;
}


