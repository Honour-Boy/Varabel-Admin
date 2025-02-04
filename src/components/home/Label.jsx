const Today = new Date();
const TodayString = new Date(Today.getTime()).toISOString().slice(0, 10);

const Day7 = new Date();
Day7.setDate(Day7.getDate() - 7);
const Day7String = Day7.toISOString().slice(0, 10);

const Day30 = new Date();
Day30.setDate(Day30.getDate() - 30);
const Day30String = Day30.toISOString().slice(0, 10);

const Year = new Date();
Year.setFullYear(Year.getFullYear() - 1);
const YearString = Year.toISOString().slice(0, 10);

export default [
  {
    id: 1,
    label: "Today",
    date: TodayString,
    name: "Today",
    on: true,
  },
  {
    id: 2,
    label: "Last 7 Days",
    date: Day7String,
    name: "Day7",
    on: false,
  },
  {
    id: 3,
    label: "30 Days",
    date: Day30String,
    name: "Day30",
    on: false,
  },
  {
    id: 4,
    label: "1 Year",
    date: YearString,
    name: "Year",
    on: false,
  },
];
