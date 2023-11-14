import { useState } from "react";

// Import redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, valueAction } from "../action/action";

export default function Booking() {
  // Set defaultValue to input type=date
  let today = new Date(Date.now());
  let todayFormated = today.toISOString().split("T")[0];

  // redux useSelector
  const toggleReducer = useSelector((state) => state.toggleReducer);
  const valueReducer = useSelector((state) => state.valueReducer);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [bookingSquareM, setBookingSquareM] = useState(valueReducer);
  const [bookingIntervall, setBookingIntervall] = useState("");
  const [startDate, setStartDate] = useState(todayFormated);

  const handleEmailButton = () => {
    if (bookingIntervall !== "") {
      const subject = encodeURIComponent(`Förråds förfrågan ${name}`);
      const body = encodeURIComponent(`Meddelande: ${message} 

Förrådsstorlek: ${valueReducer}

Email: ${email} 

Namn på kund: ${name}

Boknings längd: ${bookingIntervall}

Uppsägningsvillkor: Senast 2 veckor innan påbörjad månad.

Övriga villkor: 
- Innehållet i ert förråd täcks av egen hemförsäkring.
- Innefattar urstädning av förråd senast utflyttningsdatum, överträdelse böter 500kr.
- Ej tömda förråd efter 2 påminnelser, bötfälles i beaktning av kvarlämnat material (max böter 5000kr).
- Materialet tas till återvinningsstation.

Start Datum: ${startDate}`);

      window.location.href = `mailto:forradshotelbjasta@hotmail.com?subject=${subject}&body=${body}`;
    }
  };

  // redux dispatch
  const dispatch = useDispatch();

  // functioner dispatch
  function handleToggleChange() {
    dispatch(toggleAction(!toggleReducer));
  }
  function handleValueChange(e) {
    dispatch(valueAction(e.target.value));
  }

  const monthPriceBase = parseInt(valueReducer.substring(0, 2));

  return (
    <div className="cover">
      <form className="bookingWrapper">
        <p onClick={handleToggleChange} className="bookingClose">
          x
        </p>

        <h2 className="bookingH2">BOKA FÖRRÅD</h2>

        <span className="bookingSquareM">
          <select onChange={handleValueChange}>
            <option defaultValue={valueReducer}>{valueReducer}*</option>
            <option value="4 m2 från 429kr/månad">
              4 m2 från 429kr/månad*
            </option>
            <option value="5 m2 från 529kr/månad">
              5 m2 från 529kr/månad*
            </option>
            <option value="6 m2 från 629kr/månad">
              6 m2 från 629kr/månad*
            </option>
            <option value="7 m2 från 729kr/månad">
              7 m2 från 729kr/månad*
            </option>
            <option value="8 m2 från 829kr/månad">
              8 m2 från 829kr/månad*
            </option>
            <option value="10 m2 från 1029kr/månad">
              10 m2 från 1029kr/månad*
            </option>
            <option value="11 m2 från 1129kr/månad">
              11 m2 från 1129kr/månad*
            </option>
            <option value="12 m2 från 1229kr/månad">
              12 m2 från 1229kr/månad*
            </option>
            <option value="13 m2 från 1329kr/månad">
              13 m2 från 1329kr/månad*
            </option>
          </select>
        </span>

        {/* <span className="bookingIntervall">
  <select onChange={(e) => setBookingIntervall(e.target.value)}>
    <option value="">Abonnemang:*</option>
    <option value={`Månadsvis ${monthPrice}99kr/månad`}>
      Månadsvis {monthPrice}99kr/månad*
    </option>
    <option value={`3 månader: ${monthPrice}59kr/månad`}>
      3 månader: {monthPrice}59kr/månad*
    </option>
    <option value={`6 månader - tillsvidare: ${--monthPrice}99kr/månad`}>
      6 månader - tillsvidare: {monthPrice}99kr/månad*
    </option>
  </select>
</span> */}
        <span className="bookingIntervall">
          <select onChange={(e) => setBookingIntervall(e.target.value)}>
            <option value="">Abonnemang:*</option>
            <option value={`Månadsvis ${monthPriceBase}99kr/månad`}>
              Månadsvis {monthPriceBase}99kr/månad*
            </option>
            <option
              value={`6 månader faktureringsintervall: ${monthPriceBase}69kr/månad`}
            >
              6 månader faktureringsintervall: {monthPriceBase}69kr/månad*
            </option>
            <option
              value={`12 månader faktureringsintervall: ${monthPriceBase}29kr/månad`}
            >
              12 månader faktureringsintervall: {monthPriceBase}29kr/månad*
            </option>
          </select>
        </span>

        <label className="bookingStartDate">
          Önskat Startdatum:
          <input
            type="date"
            defaultValue={todayFormated}
            min={todayFormated}
            onChange={(e) => setStartDate(e.target.value)} // Add this line to update the startDate state
          ></input>
        </label>

        <input
          className="footerInput"
          type="email"
          placeholder="Din MejlAdress*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          className="footerInput"
          type="text"
          placeholder="Namn*"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <textarea
          className="bookingMessage"
          type="text"
          placeholder="Meddelande*"
          maxLength="500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="button" className="btn" onClick={handleEmailButton}>
          SKICKA FÖRFRÅGAN
        </button>
      </form>
    </div>
  );
}
