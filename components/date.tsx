import { parseISO, format } from 'date-fns';
type DateProps = {
  dateString: string;
};
const DateFormat: React.FC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default DateFormat;
