import arrow from 'assets/arrow-bottom.svg';
import SMeetings from './style';
import FirstSummary from './FirstSummary';
import SecondSummary from './SecondSummary';

export default function Meetings() {
  return (
    <SMeetings className="meetings" arrow={arrow}>
      <h2>Mes reunions</h2>
      <FirstSummary />
      <SecondSummary />
    </SMeetings>
  );
}
