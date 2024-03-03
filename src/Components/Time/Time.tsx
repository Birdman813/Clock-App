import iconSun from "../../assets/desktop/icon-sun.svg";
import iconMoon from "../../assets/desktop/icon-moon.svg";
import "./Time.css";

interface Props {
  time: string | undefined;
  hour: number;
}

function Time(props: Props) {
  const { time, hour } = props;

  return (
    <div className="time-container">
      <div>
        {hour < 18 ? (
          <img src={iconSun} alt="sun" />
        ) : (
          <img src={iconMoon} alt="Moon" />
        )}
        <p>
          {hour < 6
            ? "Good Night"
            : hour < 12
            ? "Good Morning"
            : hour >= 18
            ? "Good Evening"
            : hour >= 12
            ? "Good Afternoon"
            : ""}
        </p>
      </div>
      <h1>
        {time} <span>BST</span>
      </h1>
    </div>
  );
}

export default Time;
