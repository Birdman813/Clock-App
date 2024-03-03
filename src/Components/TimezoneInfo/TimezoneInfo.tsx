import { TimeZone } from "../../App";
import "./TimezoneInfo.css";

interface Props {
  timeZone: TimeZone | undefined;
  hour: number;
}

function TimezoneInfo(props: Props) {
  const { timeZone, hour } = props;

  return (
    <div className={`timezone-info-container ${hour > 18 && "night-mode-bg"}`}>
      <div>
        <p>Current Timezone</p>
        <span>{timeZone?.timezone}</span>
      </div>
      <div>
        <p>Day of the year</p>
        <span>{timeZone?.day_of_year}</span>
      </div>
      <div>
        <p>Day of the week</p>
        <span>{Number(timeZone?.day_of_week) + 1}</span>
      </div>
      <div>
        <p>Week Number</p>
        <span>{timeZone?.week_number}</span>
      </div>
    </div>
  );
}

export default TimezoneInfo;
