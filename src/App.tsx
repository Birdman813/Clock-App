import "./App.css";
import axios from "axios";
import { ReactNode, useEffect, useRef, useState } from "react";
import QuoteText from "./Components/Quote/QuoteText";
import Time from "./Components/Time/Time";
import Button from "./Components/Button/Button";
import TimezoneInfo from "./Components/TimezoneInfo/TimezoneInfo";

export interface TimeZone {
  abbreviation: String;
  client_ip: String;
  datetime: String;
  day_of_week: React.ReactNode;
  day_of_year: React.ReactNode;
  dst: Boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: String;
  unixtime: Number;
  utc_datetime: String;
  utc_offset: String;
  week_number: ReactNode;
}
export interface QuoteInterface {
  id: String;
  content: String;
  author: String;
  tags: String;
  authorSlug: String;
  length: Number;
  dateAdded: String;
  dateModified: String;
}

function App() {
  const [quote, setQuote] = useState<undefined | QuoteInterface>();
  const [timeZone, setTimeZone] = useState<undefined | TimeZone>();
  const [more, setMore] = useState<Boolean>(false);
  const isFirtsRender = useRef(true);

  // Getting Random Quote from Quotable API
  const getQuote = async () => {
    await axios.get("https://api.quotable.io/quotes/random").then((res) => {
      setQuote(res.data[0]);
    });
  };

  // Getting timezone API
  const getTimeZone = async () => {
    await axios.get("https://worldtimeapi.org/api/ip").then((res) => {
      setTimeZone(res.data);
    });
  };

  useEffect(() => {
    if (isFirtsRender.current) {
      getQuote();
      getTimeZone();
      isFirtsRender.current = false;
    }

    const intervailId = setInterval(() => {
      getTimeZone();
    }, 60000);

    return () => clearInterval(intervailId);
  }, []);

  const time = timeZone?.datetime.slice(11, 16);
  const hour = Number(time?.slice(0, 2));

  return (
    <div className={`body-container ${hour > 18 ? "night-mode-bg-img" : ""}`}>
      {!more && <QuoteText quote={quote} getQuote={getQuote} />}
      <div className="time-button-container">
        <Time time={time} hour={hour} />
        <Button more={more} setMore={setMore} />
      </div>
      {more && <TimezoneInfo hour={hour} timeZone={timeZone} />}
    </div>
  );
}
export default App;
