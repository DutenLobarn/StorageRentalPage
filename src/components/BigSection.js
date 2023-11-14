import React from "react";
// Import image
import Big from "../img/stor.png";
// Import redux
import { useDispatch, useSelector } from "react-redux";
import { toggleAction, valueAction } from "../action/action";

export default function BigSection() {
  // redux useSelector
  const toggleReducer = useSelector((state) => state.toggleReducer);

  // redux dispatch
  const dispatch = useDispatch();

  // functioner dispatch
  function handleToggleChange(e) {
    dispatch(toggleAction(!toggleReducer));
    dispatch(valueAction(e.target.value));
  }

  return (
    <section className="bigSectionWrapper">
      <div className="bigSectionContainer">
        {/* bild beroende storlek på förråd, small-medium-big */}
        <img className="bigSectionImgSide" src={Big} alt="bigstorage" />
        {/* texten ska sättas beroende vilket storlek på förråden */}
        <p className="bigSectionP">11 m2 från 1129kr/månad</p>
        <button
          onClick={handleToggleChange}
          value="11 m2 från 1129kr/månad"
          className="btn2"
        >
          Boka Förråd
        </button>
      </div>


      <div className="bigSectionContainer">
      <h3 className="bigSectionH3">Stor</h3>
        {/* bild beroende storlek på förråd, small-medium-big */}
        <img className="bigSectionImgSide" src={Big} alt="smallstorage" />
        {/* texten ska sättas beroende vilket storlek på förråden */}
        <p className="bigSectionP">12 m2 från 1229kr/månad</p>
        <button
          onClick={handleToggleChange}
          value="12 m2 från 1229kr/månad"
          className="btn2"
        >
          Boka Förråd
        </button>
      </div>
      <div className="bigSectionContainer">
        {/* bild beroende storlek på förråd, small-medium-big */}
        <img className="bigSectionImgSide" src={Big} alt="smallstorage" />
        {/* texten ska sättas beroende vilket storlek på förråden */}
        <p className="bigSectionP">13 m2 från 1329kr/månad</p>
        <button
          onClick={handleToggleChange}
          value="13 m2 från 1329kr/månad"
          className="btn2"
        >
          Boka Förråd
        </button>
      </div>
    </section>
  );
}
