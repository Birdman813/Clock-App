import iconRefresh from "../../assets/desktop/icon-refresh.svg";
import "./Quote.css";
import { QuoteInterface } from "../../App";

interface Props {
  quote: QuoteInterface | undefined;
  getQuote: () => Promise<void>;
}

function Quote(props: Props) {
  const { quote, getQuote } = props;

  return (
    <div className="quote-container">
      <p>
        {quote?.content}{" "}
        <span className="author">
          <br />
          {quote?.author}
        </span>
      </p>

      <img src={iconRefresh} alt="refresh" onClick={getQuote} />
    </div>
  );
}

export default Quote;
