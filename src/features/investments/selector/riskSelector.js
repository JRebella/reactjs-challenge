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
import { fetchRiskTable } from "../../../util/dummyInvestmentPlans";
import { Doughnut } from "react-chartjs-2";

const riskTable = fetchRiskTable();

const Selector = () => {
  const selectedRisk = useSelector((state) => state.risk.value);
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
          value={selectedRisk}
          onChange={handleRiskChange}
        >
          {riskButtons}
        </ToggleButtonGroup>

        <div className="progress selector-bar">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: selectedRisk * 10 + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <RiskTable selectedRisk={selectedRisk} />
      <RiskDoughnutChart selectedRisk={selectedRisk} />
    </div>
  );
};

const RiskTable = ({ selectedRisk }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {Object.keys(riskTable[0]).map((key) => {
            return (
              <th key={key} scope="col">
                {key}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {riskTable.map((riskData) => {
          return (
            <tr
              key={riskData.Risk}
              className={riskData.Risk === selectedRisk ? "table-primary" : ""}
            >
              {Object.keys(riskData).map((key) => {
                return <td key={key}>{riskData[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
var _ = require("lodash");

const RiskDoughnutChart = ({ selectedRisk }) => {
  const riskData = _.omit(
    riskTable.find((element) => element.Risk === selectedRisk),
    "Risk"
  );
  const chartData = {
    labels: Object.keys(riskData).map((key) => key),
    datasets: [
      {
        data: Object.keys(riskData).map((key) => riskData[key]),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#3cba9f",
          "#e8c3b9",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#3cba9f",
          "#e8c3b9",
        ],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default Selector;
