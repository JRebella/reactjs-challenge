import React from "react";

import { actions } from "./riskSelectorSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  ToggleButtonGroup,
  ToggleButton,
  FormText,
  Row,
  Col,
} from "react-bootstrap";
import "./styles.css";
const Selector = () => {
  const risk = useSelector((state) => state.risk.value);
  const dispatch = useDispatch();
  const handleRiskChange = (riskLevel) => {
    dispatch(actions.setRisk(riskLevel));
  };

  let riskButtons = [];
  for (let i = 1; i <= 10; i++) {
    riskButtons.push(
      <ToggleButton key={i} value={i} size="lg">
        {i}
      </ToggleButton>
    );
  }
  return (
    <div>
      <h3>Please Select A Risk Level For Your Investment Portfolio</h3>
      <div className="selector-container">
        <div className="selector-title">
          <div>Low</div>
          <div>High</div>
        </div>
        <ToggleButtonGroup
          type="radio"
          name="riskLevels"
          value={risk}
          onChange={handleRiskChange}
        >
          {riskButtons}
        </ToggleButtonGroup>

        <div className="progress selector-bar">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: risk * 10 + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
